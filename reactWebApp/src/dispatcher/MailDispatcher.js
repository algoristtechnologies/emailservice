import {Dispatcher} from 'flux';
let MailDispatcher = new Dispatcher();

import MailStore from '../stores/MailStore';

// Register callback with AppDispatcher
MailDispatcher.register((payload) => {

  let action = payload.action;
  let new_item = payload.new_item;
  let id = payload.id;

  switch(action) {

    // Respond to action

    // add mail
    case 'send-mail':
      MailStore.sendMail(new_item);
      break;

    // Show/Hide components based on new_item
    case 'navigate':
      MailStore.navigate(new_item);
      break;

      // Show/Hide components based on new_item
      case 'mail-search':
        MailStore.searchMail(new_item);
        break;

    // Respond to remove-item action
    case 'remove-item':
      MailStore.removeItem(id);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  MailStore.emitChange();

  return true;

});

export default MailDispatcher;
