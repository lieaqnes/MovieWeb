var mongoose = require('mongoose');
var MovieSchema = require('../schema/movie');
var Moive = mongoose.model('Movie', MovieSchema);

module.exports = Moive;