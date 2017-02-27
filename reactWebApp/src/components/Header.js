import React from 'react';
import Logo from './Logo';

const Header = React.createClass({
  render() {
    return (
      <header id="header">
        <div id="logo-group">
          { /* PLACE YOUR LOGO HERE */ }
          <Logo></Logo>
          { /* END LOGO PLACEHOLDER */ }
        </div>
      </header>
      );
  }
});

export default Header;