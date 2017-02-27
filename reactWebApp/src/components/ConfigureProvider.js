import React from 'react';
import ConfigureProviderItem from './ConfigureProviderItem';

const ConfigureProvider = React.createClass({

  getInitialState: function () {
       return { providers:  this.props.providers }
    },

  render() {
    let providerItems;
    if(this.state.providers){
      providerItems = this.state.providers.map( provider => {
        return (
          <ConfigureProviderItem provider={provider} />
        );
      });
    }

    return (
      <div className="table-wrap animated fast fadeInRight">
        <h1></h1>
        <table className="table">
          <thead>
            <tr>
              <th className="col-sm-8">Mail Provider</th>
              <th className="col-sm-2" />
              <th className="col-sm-2" />
            </tr>
          </thead>
          <tbody>
            { providerItems}
          </tbody>
        </table>
      </div>
      );
  }
});

export default ConfigureProvider;
