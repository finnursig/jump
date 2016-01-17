var mongoose = require('mongoose');
var Report = require('../models/Report').Model;

exports.getAll = () => {
    return Report.find({});
};
