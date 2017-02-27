var mongoose = require('mongoose');

var SentMail = new mongoose.Schema({
   to : String,
   from: String,
   subject: String,
   date : Date,
   content: String,
   error : String,
   emailProvider:String
});





mongoose.model('SentMail', SentMail);