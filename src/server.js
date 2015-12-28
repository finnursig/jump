const express = require('express');
const server = express();

server.use(express.static('public'));

// server.get('/', (req, res) => {
//     res.send('yo');
// });

server.listen(5000, () => {
    console.log('server running');
});
