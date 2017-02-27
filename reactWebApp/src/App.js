import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import ComposeMailForm from './components/ComposeMailForm';
import InBox from './components/InBox';
import MailDetails from './components/MailDetails';
import ConfigureProvider from './components/ConfigureProvider';
import MailStore from './stores/MailStore';

import './css/main.css';
import './css/bootstrap.css';

// Method to retrieve state from Stores
let getStates = () => {
  return {
    mails: MailStore.getMails(),
    providers: MailStore.getProviders(),
    showComponent: MailStore.getShowComponent(),
    activeComponentSelection: MailStore.getActiveComponentSelection(),
    mailDetails: ""
  };
}

class App extends Component {

  constructor(props){
  	super();

    this.state ={
        mails: [],
        providers: [],
        showComponent: MailStore.getShowComponent(),
        leftMenuActiveComponent: MailStore.getActiveComponentSelection(),
        mailDetails: ""
      };


    MailStore.doInit();
  }
  // Method to setState based upon Store changes
    _onChange() {
      this.setState(getStates());
    }

    // Add change listeners to stores
  componentDidMount() {
    MailStore.addChangeListener(this._onChange.bind(this));
  }

  // Remove change listeners from stores
  componentWillUnmount() {
    MailStore.removeChangeListener(this._onChange.bind(this));
  }

  handleShowHideComponent(value){
    this.setState({showComponent: value, leftMenuActiveComponent: value})
  }

  handleInboxItemClick(value){
    this.setState({showComponent: "details", leftMenuActiveComponent: "inbox", mailDetails: value});
  }

  render() {
    return (
      <div className="App">

        <Header />

        <div id="main" role="main">
          { /* #LEFT CONTENT */ }
          <div className="col-sm-2">

            { /* #MAIL COMPOSE */ }
            <div className="inbox-nav-bar" >
              <a id="compose-mail" className="btn btn-primary btn-block" onClick={this.handleShowHideComponent.bind(this, "compose")}><strong>Compose</strong> </a>
            </div>
            { /* END COMPOSE */ }

            { /* #INBOX AND EMAIL PROVIDER */ }
            <div className="inbox-side-bar">
              <ul className="inbox-menu-sm">
                <li className={this.state.leftMenuActiveComponent === 'inbox' ? 'active': '' } onClick={this.handleShowHideComponent.bind(this, "inbox")}>
                  <a>Outbox </a>
                </li>
                <li className={this.state.leftMenuActiveComponent === 'provider' ? 'active': '' } onClick={this.handleShowHideComponent.bind(this, "provider")}>
                  <a >Email Providers</a>
                </li>
              </ul>
            </div>
            { /* END #INBOX AND EMAIL PROVIDER */ }

          </div>
          { /* END LEFT CONTENT */ }

          { /* #RIGHT CONTENT */ }
          <div className="col-sm-10">
            { /* #CONTENT AREA */ }
            <div id="inbox-content" className="inbox-body">

            { /* #COMPOSE MAIL */ }
            {this.state.showComponent === "compose" ? <ComposeMailForm ></ComposeMailForm>: ""}
            { /* END #COMPOSE MAIL */ }

            { /* #INBOX MAIL */ }
            {this.state.showComponent === "inbox" ? <InBox mails={this.state.mails} details={this.handleInboxItemClick.bind(this)}></InBox>: "" }
            { /* END #INBOX MAIL */ }

            { /* #MAIL DETAILS */ }
            {this.state.showComponent === "details" ? <MailDetails details={this.state.mailDetails} ></MailDetails> : ""}
            { /* END #MAIL DETAILS */ }
            { /* #EMAIL PROVIDERS */ }
            {this.state.showComponent === "provider" ? <ConfigureProvider providers={this.state.providers}></ConfigureProvider>: "" }
            { /* END #EMAIL PROVIDERS */ }

            </div>
            { /* #CONTENT AREA */ }

          </div>
          { /* END #RIGHT CONTENT */ }

        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
