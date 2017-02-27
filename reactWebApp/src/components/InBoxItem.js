import React from 'react';

const InBoxItem = React.createClass({
  handleInboxItemClick: function(){
     this.props.details(this.props.mail);
  },
  render() {
	  
    return (
      <tr onClick={this.handleInboxItemClick.bind(this)}>
          <td className="inbox-table-icon">
              <div className="checkbox">
                  <label>
                      <input className="checkbox style-2" type="checkbox" />
                      <span></span>
                  </label>
              </div>
          </td>
          <td className="inbox-data-from hidden-xs hidden-sm">
              {this.props.mail.from}
          </td>
          <td className="inbox-data-message">
                <span>{this.props.mail.subject}</span>
          </td>
          <td className="inbox-data-date hidden-xs">
              {this.props.mail.date}
          </td>
      </tr>
      );
  }
});

export default InBoxItem;
