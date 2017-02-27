var mongoose = require('mongoose');

var Priorities = new mongoose.Schema({
    userId : String,
    priority1: String,
    priority2: String,
	priority3: String
 
});





mongoose.model('emailServicePriorities', Priorities);