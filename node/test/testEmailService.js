/*global describe*/
var expect = require("chai").expect;
var emailService = require("../routes/index.js");
var request = require("request");

describe("Email Service Test1: ", function () {
    this.timeout(30000);
    describe("Using SendGrid", function () {
        it("Sends an email", function (done) {
            request.post({
                url: 'http://localhost:1337/postPriorities',
                form: {'priority1': 'SendGrid', 'priority2': 'MailGun', 'priority3': 'SES'}
            }, function (err, httpResponse, body) {
                var result = JSON.parse(body);
                expect(httpResponse.statusCode).to.equal(200);
                request.post({
                        url: 'http://localhost:1337/postEmailInfo',
                        form: {
                            email: 'parag.bihade@parallelminds.in',
                            senderEmail: "atul.mogal@parallelminds.in",
                            subjectMail: 'test mail using sendgrid',
                            content: "testing sending mail functionality using sendgrid."
                        }
                    },
                    function (err, httpResponse, body) {
                        var result = JSON.parse(body);
                        expect(result.data.message).to.equal("success");
                        expect(httpResponse.statusCode).to.equal(200);
                        done();
                    });
            });
        });
    });
});

describe("Email Service Test2", function () {
    this.timeout(30000);
    describe("Using mailgun", function () {
        it("sends an email", function (done) {
            request.post({
                    url: 'http://localhost:1337/postPriorities',
                    form: {'priority1': 'MailGun', 'priority2': 'SendGrid', 'priority3': 'SES'}
                },
                function (err, httpResponse, body) {
                    var result = JSON.parse(body);
                    expect(httpResponse.statusCode).to.equal(200);
                    request.post({
                            url: 'http://localhost:1337/postEmailInfo',
                            form: {
                                email: 'parag.bihade@parallelminds.in',
                                senderEmail: "atul.mogal@parallelminds.in",
                                subjectMail: 'test mail using sendgrid',
                                content: "testing sending mail functionality using sendgrid."
                            }
                        },
                        function (err, httpResponse, body) {
                            var result = JSON.parse(body);
                            expect(result.data.message).to.equal("Queued. Thank you.");
                            done();
                        });
                });
        });
    });
});

describe("Email Service Test: to check all the email services work as expected", function () {
    this.timeout(30000);
    describe("Check whether mails are sent using SendGrid and MailGun", function () {
        it("Sending emails using SendGrid and MailGun", function (done) {
            request.post({
                    url: 'http://localhost:1337/postPriorities',
                    form: {'priority1': 'SendGrid', 'priority2': 'MailGun', 'priority3': 'SES'}
                },
                function (err, httpResponse, body) {
                    var result = JSON.parse(body);
                    expect(httpResponse.statusCode).to.equal(200);

                    request.post({
                            url: 'http://localhost:1337/postEmailInfo',
                            form: {
                                email: 'parag.bihade@parallelminds.in',
                                senderEmail: "atul.mogal@parallelminds.in",
                                subjectMail: 'test',
                                content: 'testing sending mail functionality using sendgrid.'
                            }
                        },
                        function (err, httpResponse, body) {
                         
                            var result = JSON.parse(body);
                            expect(result.data.message).to.equal("success");
                            expect(httpResponse.statusCode).to.equal(200);

                            request.post({
                                    url: 'http://localhost:1337/postPriorities',
                                    form: {'priority1': 'MailGun', 'priority2': 'SendGrid', 'priority3': 'SES'}
                                },
                                function (err, httpResponse, body) {
                                    var result = JSON.parse(body);
                                    expect(httpResponse.statusCode).to.equal(200);
                                   if (expect(httpResponse.statusCode).to.equal(200)) {
                                        request.post({
                                                url: 'http://localhost:1337/postEmailInfo',
                                                form: {
                                                    email: 'parag.bihade@parallelminds.in',
                                                    senderEmail: "atul.mogal@parallelminds.in",
                                                    subjectMail: 'test',
                                                    content: 'testing sending mail functionality using sendgrid.'
                                                }
                                            },
                                            function (err, httpResponse, body) {
                                                var result = JSON.parse(body);
                                                expect(result.data.message).to.equal("Queued. Thank you.");
                                                done();
                                            });
                                    } else {
                                        console.log("testfailed");
                                    }
                                    /*function (err, httpResponse, body) {
                                     var result = JSON.parse(body);
                                     expect(httpResponse.statusCode).to.equal(200);
                                     request.post({
                                     url: 'http://localhost:1337/postEmailInfo',
                                     form: {
                                     email: 'unmesh.ballal@parallelminds.in',
                                     senderEmail: 'parag.bihade@parallelminds.in',
                                     subjectMail: 'test',
                                     content: 'testing sending mail functionality using sendgrid.'
                                     }
                                     },
                                     function (err, httpResponse, body) {
                                     var result = JSON.parse(body);
                                     expect(result.data.message).to.equal("Queued. Thank you.");
                                     done();
                                     });

                                     }*/
                                });

                        });

                });
        });
    });
});