import React from 'react';

const ConfigureProviderItem = React.createClass({
  handleClick: function() {

  },

  render() {
    return (
    <tr>
          <td>{this.props.provider.provider}</td>
          <td></td>
          <td></td>
      </tr>
      );
  }
});

export default ConfigureProviderItem;
