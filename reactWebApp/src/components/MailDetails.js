import React from 'react';

const MailDetails = React.createClass({
  render() {
    return (
      <div className="table-wrap animated fast fadeInRight">
        { /* #MAIL DETAILS SUBJECT */ }
        <h2 className="email-open-header">{this.props.details.subject}</h2>
        { /* END #MAIL DETAILS SUBJECT */ }
        { /* #MAIL DETAILS MAIL IDS AND DETAILS */ }
        <div className="inbox-info-bar">

          <span><strong>From: </strong>{this.props.details.from} </span>
      </div>
          <div className="inbox-info-bar">

              <span> <strong>To: </strong>  <i>{this.props.details.to}</i></span>
          </div>
        { /* END #MAIL DETAILS MAIL IDS AND DETAILS */ }
        { /* #MAIL DETAILS BODY */ }
        <div className="inbox-message">
          {this.props.details.content}
        </div>
        { /* #MAIL DETAILS BODY */ }
      </div>
      );
  }
});

export default MailDetails;
