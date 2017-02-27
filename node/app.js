/* Global use*/
/** FileName @app.js
 * <summary>
 *  @author ParallelMinds Technology Solutions Pvt Ltd
 *  This is consist of REST API configuration,instance to create restify server for web application
 *  @express :- Express Server on which node app is run
 *  @morgan  :- NPM used to store logs for server and whole application
 *  @nconf  :-Use to get values from SEP Application config.json'
 *  @mongoose :-Use to perform CRUD operations with mongo DB
 *  @cors :-Use for provide access to cross browser origin for Client request
 *</summary>
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var nconf = require('nconf');
var log4js = require("log4js");


nconf.file('default', 'config.json');
require('./models/emailServicePriorities');
require('./models/sentMail.js');

var routes = require('./routes/index');
var users = require('./routes/users');


var appenders = nconf.get('appenders');
var logger4js = log4js.getLogger("app.js");
log4js.configure({
 "appenders" : appenders 
});


var app = express();
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//
mongoose.connect('mongodb://localhost/EmailService');


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var logger4js = log4js.getLogger("EmailService");
logger4js.setLevel("DEBUG");

logger4js.debug("Server started."); 


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//App Declares as global variable by exporting it as modules
module.exports = app;
