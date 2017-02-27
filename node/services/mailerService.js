var Promise = require("bluebird");
var nconf = require('nconf');
var p = Promise.promisifyAll(require("nodemailer"));
var sgTransport = require('nodemailer-sendgrid-transport'); //sendGrid transport
var mgTransport = require('nodemailer-mailgun-transport'); //mailGun transport
var sendGridConfig = nconf.get('sendGrid');
var mailGunConfig = nconf.get('mailgun');
var sesConfig = nconf.get('ses');
var mailerClient = nconf.get('mailerClient');
var mdTransport = require('nodemailer-mandrill-transport'); //mandrill/mailchimp transport
var mongoose = require('mongoose');
var sesTransport = require('nodemailer-ses-transport');
var log4js = require("log4js");
var appenders = nconf.get('appenders');
var logger4js = log4js.getLogger("mailerService.js");
log4js.configure({
    "appenders": appenders
});

exports.sendEmail = sendEmail;
exports.savePriorities = savePriorities;
exports.getSentMails = getSentMails;

/**
 * @description {Used To send Emails based by Send Grid as a service provider}
 * @param emailInfo
 * @param callback
 */
function sendEmail(emailInfo, callback) {
    var EmailServicePriorities = mongoose.model('emailServicePriorities');
    var SentMail = mongoose.model('SentMail');
    EmailServicePriorities.findOne({}, function (err, priorities) {
        if (err) {
            callback(err, null);
        } else {
            if (!priorities) {
                var priorities = {"priority1": "SendGrid", priority2: "MailGun"};
            }
        }
       // configOption(mailerClient.priority1, function (mailer) {    //use SendGrid transport
            configOption(priorities.priority1, function (mailer) {  //use SendGrid transport
            configEmail(emailInfo, function (emailData) {
                mailer.sendMail(emailData).then(function (data) {
                    data.emailProvider = priorities.priority1;
                    emailInfo.emailProvider = priorities.priority1;
                    saveMail(emailInfo, function (savedMailInfo) {
                        callback(null, data);
                    });
                }).catch(function (err) {
                    logger4js.info("-----------------------------------------");
                    logger4js.info("Sending email using " + priorities.priority1 + " has failed, hence trying to send using next provider")
                    logger4js.error(err);
                    logger4js.info("-----------------------------------------");

                    console.log(priorities.priority2);
                   // configOption(mailerClient.priority2, function (mailer) {   //if sendGrid transport fails try mailGun
                        configOption(priorities.priority2, function (mailer) {   //if sendGrid transport fails try mailGun
                        configEmail(emailInfo, function (emailData) {
                            mailer.sendMail(emailData).then(function (data) {
                                emailInfo.emailProvider = priorities.priority2;
                                data.emailProvider = priorities.priority2;
                                saveMail(emailInfo, function (savedMailInfo) {
                                    callback(null, data);
                                });
                            }).catch(function (err) {
                                logger4js.info("-----------------------------------------");
                                logger4js.info("Sending email using " + priorities.priority2 + " has failed, hence trying to send using next provider")
                                logger4js.error(err);
                                logger4js.info("-----------------------------------------");
                                configOption(priorities.priority3, function (mailer) {
                                    mailer.sendMail(emailData).then(function (data) {
                                        emailInfo.emailProvider = priorities.priority3;
                                        saveMail(emailInfo, function (savedMailInfo) {
                                            callback(null, data);
                                        });
                                    }).catch(function (err) {
                                        logger4js.info("-----------------------------------------");
                                        logger4js.info("Sending email using " + priorities.priority3 + " has failed, hence trying to send using next provider")
                                        logger4js.error(err);
                                        logger4js.info("-----------------------------------------");
                                        emailInfo.error = err;
                                        emailInfo.emailProvider = undefined;
                                        saveMail(emailInfo, function (savedMailInfo) {
                                            callback('can not send an email', null);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

/**
 * @description {This method is used to save mail providers with priorities }
 * @param emailPriorities
 * @param callback
 */
function savePriorities(emailPriorities, callback) {
    var EmailServicePriorities = mongoose.model('emailServicePriorities');
    EmailServicePriorities.findOneAndUpdate({userId: 'test'}, {
        userId: 'test',
        'priority1': emailPriorities.priority1,
        'priority2': emailPriorities.priority2,
        'priority3': emailPriorities.priority3
    }, {upsert: true}, function (err, doc) {
        if (err) callback(err, null);
        callback(null, doc);
    });
}

/**
 * @description {This method used to get list of sent mails using mongo services}
 * @param callback
 */
function getSentMails(callback) {
    var SentMail = mongoose.model('SentMail');
    SentMail.find({}, function (err, doc) {
        if (err) callback(err, null);
        callback(null, doc);
    });
}

//configure options for sending mails 
var configOption = function (opt, callback) {
    //var serviceId = opt;
    var mailer = null;
    switch (opt) {
        case 'SendGrid':
            var options = {
                auth: sendGridConfig
            };
            mailer = p.createTransport(sgTransport(options));
            break;
        case 'MailGun':
            var options = {
                auth: mailGunConfig
            };
            mailer = p.createTransport(mgTransport(options));
            // mailer = nodemailer.createTransport(mgTransport(options));
            break;
        case "SES":
            var options = sesConfig;

            mailer = p.createTransport(sesTransport(options));

            break;
    }
    callback(mailer);
};

/**
 * @description {This Method is used to config Email while sending it to User }
 * @param EmailInfo
 * @param callback
 */
var configEmail = function (EmailInfo, callback) {
    //var serviceId = opt;
    var email = {
        from: EmailInfo.senderEmail,
        to: EmailInfo.email,
        subject: EmailInfo.subjectMail,
        text: 'Come inside for an urgent meeting',
        html: '<p>' + EmailInfo.content + '</p>'
    };
    callback(email);
};

/**
 * @description {This mehtod is usedd to save email in MongoDB with use of emailService collection}
 * @param emailData
 * @param callback
 */
var saveMail = function (emailData, callback) {
    var SentMail = mongoose.model('SentMail');
    var SentMail = new SentMail();  //create an object to save a sent mail
    SentMail.to = emailData.email;
    SentMail.from = emailData.senderEmail;
    SentMail.subject = emailData.subjectMail;
    SentMail.error = emailData.error;
    SentMail.content = emailData.content;
    SentMail.date = new Date();
    SentMail.emailProvider = emailData.emailProvider;

    SentMail.save(function (err, doc) { // save the sent mail
        if (!err) {
            doc.date = SentMail.date;
            callback(doc);
        }
    });
};
