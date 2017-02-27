import {EventEmitter} from 'events';
import _ from 'lodash';

import MailAPI from '../utils/MailAPI';

let MailStore = _.extend({}, EventEmitter.prototype, {
  url: "http://114.143.30.179:1337/",
  Mails: [],
  Providers: [],
   showComponent: "compose",
   activeComponentSelection: "compose",
   doInit: function() {
     MailAPI.getMails(this.url + "getSentEmails").then(mails => {
          this.Mails = mails.data;
          this._notify();
      }).catch(function() {
          // display error, not related to Vuex
      });

      MailAPI.getProviders(this.url + "getProviderList").then(providers => {
            this.Providers = providers.data;
            this._notify();
       }).catch(function() {
           // display error, not related to Vuex
       });;
   },

  // get all providers
  getProviders: function(){
   return this.Providers;
 },

 // update provider details
  updateProvider: function(new_item) {

  },

  // get show component name
  getShowComponent: function () {
    return this.showComponent;
  },

  // get active component for heighlight left side menu
  getActiveComponentSelection: function () {
    return this.activeComponentSelection;
  },

  // Get all mails
  getMails: function(){
   return this.Mails;
  },

  // Add mail
  sendMail: function(new_item){
    var sendPostData= {"email":new_item.to,"senderEmail":new_item.from,subjectMail:new_item.subject, content: new_item.content};
    MailAPI.sendMail(this.url + 'postEmailInfo',sendPostData).then(mails => {
      this.Mails.push(new_item);
	  this.showComponent= "inbox";
	this.activeComponentSelection= "inbox";
      this._notify();
    }).catch(function() {
      // display error, not related to Vuex
    });
  },

  // Remove mail
  removeMail: function(mail_id){

    let mails = this.Mails;

    _.remove(mails,(mail) => {
      return mail_id === mail.id;
    });

    this.Mails = mails;

  },

  // search mails
  searchMail: function(new_item){
    return this.Mails;
  },

  // navigate to component
  navigate: function(new_item){
    this.showComponent = new_item;
    this.activeComponentSelection = new_item;
	this._notify();
  },

  // Emit Change event
  _notify: function() {
        this.emit('change');
    },

  emitChange: function(){
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }

});

export default MailStore;
