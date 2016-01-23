var nconf = require('nconf');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var users = require('./server/api/users');
var reports = require('./server/api/reports');

nconf.argv()
    .env()
    .file({ file: './config.json' });

mongoose.connect(nconf.get('database'));

const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.set('views', './src/server/views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.use('/auth', require('./server/routes/auth'));

app.get('*', (req, res) => {
    Promise.all(users.getAll(), reports.getAll())
        .then((users, reports) => {
            res.render('index', {
                user: req.user,
                users: users,
                reports: reports
            });
        });
});

app.listen(5000, () => {
    console.log('server running');
});
