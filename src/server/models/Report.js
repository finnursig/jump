var mongoose = require('mongoose');
var userSchema = require('./User').schema;

var userSchema = exports.reportSchema = new mongoose.Schema({
    userId: String,
	created: { type: Date, default: Date.now },
    game: String,
    name: String,
    url: String,
    players: [{ user: userSchema, army: String }]
	//title:  String,
	//author: String,
	//body:   String,
	//comments: [{ body: String, date: Date }],
	//date: { type: Date, default: Date.now },
	//hidden: Boolean,
	//meta: {
	//	votes: Number,
	//	favs:  Number
	//}
});

exports.Model = mongoose.model('Report', userSchema);
