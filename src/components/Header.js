import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <h1 className="header__logo">QCZ</h1>
        <nav className="header__nav">
          <p className="header__link">Search</p>
          <p className="header__link">Forums</p>
          <p className="header__link">Events</p>
          <p className="header__link">About</p>
          <p className="header__link">Contact</p>
          <p className="header__link">Login</p>
        </nav>
      </div>
    );
  }
}

export default Header;
