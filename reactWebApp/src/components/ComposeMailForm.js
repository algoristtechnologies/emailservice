import React from 'react';
import MailDispatcher from "../dispatcher/MailDispatcher";

 var wrongmailids = "";
 var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
 var ids = "";
 var i =0;
const ComposeMailForm = React.createClass({
  getInitialState: function () {
       return {
         "emailFrom": "",
         "emailTo": "",
         "emailSubject": "",
         "emailBody": "",
         "emailFromMessage": "",
         "emailToMessage": "",
         "emailSubjectMessage": "",
         "emailBodyMessage": ""
       }
     },

     handleEditorChange: function (e) {
         if(e.target.value === ""){
           this.setState({ "emailBodyMessage": "Please enter text" });
         }else{
           this.setState({ "emailBodyMessage": "" });
         }
         this.setState({ "emailBody":  e.target.value });
       },

       handleEmailFromChange: function (e) {
         if(e.target.value === ""){
           this.setState({ "emailFromMessage": "Please enter From" });
         }else{
             this.setState({ "emailFromMessage": "" });
       }

       this.setState({ "emailFrom": e.target.value });
     },

     handleEmailFromBlur: function (e) {
           this.setState({ "emailFrom": e.target.value });
           if(e.target.value === ""){
             this.setState({ "emailFromMessage": "Please enter From" });
           }else{

             ids = e.target.value.split(/,|;/);
             for (i = 0; i < ids.length; i++) {
                if(ids[i].trim()){
                    if(expr.test(ids[i]) === false){
                        wrongmailids = ids[i] + ", ";
                 }
               }
             }

             if(wrongmailids){
                this.setState({ "emailFromMessage": wrongmailids + " are invalid" });
             }else{
               this.setState({ "emailFromMessage": "" });
             }
          }
        },

       handleEmailToChange: function (e) {
         if(e.target.value === ""){
           this.setState({ "emailToMessage": "Please enter To" });
         }else{
             this.setState({ "emailToMessage": "" });
       }

       this.setState({ "emailTo": e.target.value });
     },

     handleEmailToBlur: function (e) {
           this.setState({ "emailTo": e.target.value });
           if(e.target.value === ""){
             this.setState({ "emailToMessage": "Please enter To" });
           }else{
             ids = e.target.value.split(/,|;/);
             for (i = 0; i < ids.length; i++) {
                if(ids[i].trim()){
                    if(expr.test(ids[i]) === false){
                        wrongmailids = ids[i] + ", ";
                 }
               }
             }

             if(wrongmailids){
                this.setState({ "emailToMessage": wrongmailids + " are invalid" });
             }else{
               this.setState({ "emailToMessage": "" });
             }
          }
        },
       handleEmailSubjectChange: function (e) {
           if(e.target.value === ""){
             this.setState({ "emailSubjectMessage": "Please enter Subject" });
           }else{
             this.setState({ "emailSubjectMessage": "" });
          }

        this.setState({ "emailSubject": e.target.value });
       },

       handleCancelClick: function () {
         MailDispatcher.dispatch({
               action: 'navigate',
               new_item: "inbox"
             });
       },

       handleSendClick: function () {
         var checkvalid = true;

         if(this.state.emailFrom === ""){
           this.setState({ "emailFromMessage": "Please enter From" });
           checkvalid = false;
         }else{
           ids = this.state.emailFrom.split(/,|;/);
           for (i = 0; i < ids.length; i++) {
            if(ids[i].trim()){
                if(expr.test(ids[i]) === false){
                    wrongmailids = ids[i] + ", ";
             }
            }
           }

           if(wrongmailids){
              this.setState({ "emailFromMessage": wrongmailids + " are invalid" });
               checkvalid = false;
           }
         }

         if(this.state.emailTo === ""){
           this.setState({ "emailToMessage": "Please enter To" });
           checkvalid = false;
         }else{
           ids = this.state.emailTo.split(/,|;/);
           for (i = 0; i < ids.length; i++) {
            if(ids[i].trim()){
                if(expr.test(ids[i]) === false){
                    wrongmailids = ids[i] + ", ";
             }
            }
           }

           if(wrongmailids){
              this.setState({ "emailToMessage": wrongmailids + " are invalid" });
               checkvalid = false;
           }
         }

         if(this.state.emailSubject === ""){
           this.setState({ "emailSubjectMessage": "Please enter Subject" });
           checkvalid = false;
         }

         if(this.state.emailBody === ""){
           this.setState({ "emailBodyMessage": "Please enter text" });
           checkvalid = false;
         }

         if(checkvalid){
           MailDispatcher.dispatch({
                 action: 'send-mail',
                 new_item: {from: this.state.emailFrom, subject: this.state.emailSubject, content: this.state.emailBody, to: this.state.emailTo, title: this.state.emailSubject}
               });
          }
       },

  render() {
    return (
      <div className="table-wrap animated fast fadeInRight">
        { /* #COMPOSE MAIL HEADEAR */ }
        <h2 className="email-open-header">Compose New Email</h2>
        { /* END #COMPOSE MAIL HEADEAR */ }

        { /* #COMPOSE MAIL */ }
      <form encType="multipart/form-data" action="#" method="POST" className="form-horizontal" id="email-compose-form">

      { /* #COMPOSE MAIL From */ }
      <div className="inbox-info-bar no-padding">
        <div className="row">
          <div className="form-group">
            <label className="control-label col-md-1"><strong>From</strong></label>
            <div className="col-md-11">
              <input className="form-control"  value={this.state.emailFrom}
                              placeholder="Ex: hello@example.com"
                              onChange={this.handleEmailFromChange} onBlur={this.handleEmailFromBlur} type="text" />
                              <span className="text-danger">{this.state.emailFromMessage}</span>
            </div>
          </div>
        </div>
      </div>
      { /* END #COMPOSE MAIL From  */ }

        { /* #COMPOSE MAIL TO */ }
        <div className="inbox-info-bar no-padding">
          <div className="row">
            <div className="form-group">
              <label className="control-label col-md-1"><strong>To</strong></label>
              <div className="col-md-11">
                <input className="form-control"  value={this.state.emailTo}
                                placeholder="Ex: hello@example.com"
                                onChange={this.handleEmailToChange} onBlur={this.handleEmailToBlur} type="text" />
                                <span className="text-danger">{this.state.emailToMessage}</span>
              </div>
            </div>
          </div>
        </div>
        { /* END #COMPOSE MAIL TO  */ }

        { /* #COMPOSE MAIL SUBJECT */ }
        <div className="inbox-info-bar no-padding">
          <div className="row">
            <div className="form-group">
              <label className="control-label col-md-1"><strong>Subject</strong></label>
              <div className="col-md-11">
                <input className="form-control"  value={this.state.emailSubject}
                               onChange={this.handleEmailSubjectChange} onBlur={this.handleEmailSubjectChange} type="text"  />
                               <span className="text-danger">{this.state.emailSubjectMessage}</span>
              </div>
            </div>
          </div>
        </div>
        { /* #COMPOSE MAIL SUBJECT */ }

        { /* #COMPOSE MAIL BODY */ }
        <div className="inbox-message no-padding">
          <div id="emailbody">
            <textarea className="textarea" placeholder="Please enter text..." defaultValue={''} onChange={this.handleEditorChange} onBlur={this.handleEditorChange} ></textarea>
            <span className="text-danger">{this.state.emailBodyMessage}</span>
          </div>
        </div>
        { /* END #COMPOSE MAIL BODY */ }
        { /* #COMPOSE MAIL DISCARD AND SEND BUTTON FOOTER */ }
        <div className="inbox-compose-footer">
          <button className="btn btn-danger mrgLeft" type="button" onClick={this.handleCancelClick} >
            Discard
          </button>

          <button className="btn btn-primary pull-right" type="button" id="send"  onClick={this.handleSendClick}>
            Send <i className="fa fa-arrow-circle-right fa-lg" />
          </button>
        </div>
        { /* END #COMPOSE MAIL DISCARD AND SEND BUTTON FOOTER */ }
        { /* END #COMPOSE MAIL BODY */ }
      </form>
      </div>
      );
  }
});

export default ComposeMailForm;
