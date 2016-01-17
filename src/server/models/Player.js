var mongoose = require('mongoose');

var playerSchema = exports.schema = new mongoose.Schema({
    name: String,
	created: { type: Date, default: Date.now }
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

exports.Model = mongoose.model('Player', playerSchema);
