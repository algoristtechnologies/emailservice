import React from 'react';
import InBoxItem from './InBoxItem';


const InBox = React.createClass({
     componentWillReceiveProps(nextProps) {
     },
     handleInboxItemClick: function(value){
        this.props.details(value);
     },

  render() {
    let mailItem;
    var count =0;
    if(this.props.mails){
      mailItem = this.props.mails.map( mail => {
        count++;
        return (
          <InBoxItem details={this.handleInboxItemClick.bind(this, mail)} key={count} mail={mail} />
        );
      });
    }

    return (
      <div>
	 <h1></h1>
	 
      <table id="inbox-table" className="table table-striped table-hover animated fast fadeInRight">
        <tbody>
          {mailItem}
        </tbody>
      </table>
      </div>
      );
  }
});

export default InBox;
