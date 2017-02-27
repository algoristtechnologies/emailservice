/** FileName @index.js
 * <summary>
 *  @author ParallelMinds Technology Solutions Pvt Ltd
 *  Node Base file for running API,Consist of NPM
 *  @express :- Express Server on which node app is run
 *  @route  :- NPM used to store logs for server and whole application
 *  @mailerService  :-Import of mailer service module for performing operations with emails'
 *</summary>
 */
var express = require('express');
var router = express.Router();
var mailerService = require('../services/mailerService');
var log4js = require("log4js");
var nconf = require('nconf');
var emailProviders = nconf.get('emailProviders');
var appenders = nconf.get('appenders');
var logger4js = log4js.getLogger("index.js");
log4js.configure({
 "appenders" : appenders 
});


//GET home page.
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

//Post Mail information
router.post('/postEmailInfo', function (req, res) {
    // var test = JSON.parse(req.body);
    mailerService.sendEmail(req.body, function (err, data) {
        if (err) {
			logger4js.error(err); 
            res.json({message: 'can not send email', data:null});
        }
        else
		{
			res.json({message: 'success', data: data});
		}
    });

});

//Post priorities
router.post('/postPriorities', function (req, res) {
    mailerService.savePriorities(req.body, function (err, data) {
        console.log(data);
        if (err) {
			logger4js.error(err); 
            res.json({message: 'not found.', data: null});
        }
        else
            res.json({message: 'success', data: "priorities added successfully."});
    });

});

// get sent emails
router.get('/getSentEmails', function (req, res) {
    mailerService.getSentMails(function (err, sentEmailData) {
        if (err) {
            res.json({message: 'not found.', data: null});
        }
        else
            res.json({message: 'success', data: sentEmailData});
    });
});

//get sent emails
router.get('/getProviderList', function (req, res) {
    res.json({message: 'success', data: emailProviders});
});


module.exports = router;