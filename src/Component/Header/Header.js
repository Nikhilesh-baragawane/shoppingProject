import React from "react";
import template from "./Header.jsx";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { isToggleOn: false, show: true, isToggleO: false, sho: true };
    this.showTable = this.showTable.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showTabl = this.showTabl.bind(this);
    this.handleClos = this.handleClos.bind(this);
  }

  showTable(e) {
    e.preventDefault();
    this.setState(() => ({
      isToggleOn: true,
      show: true,
    }));
  }

  handleClose() {
    this.setState(() => ({
      show: false,
    }));
  }
  showTabl(e) {
    e.preventDefault();
    this.setState(() => ({
      isToggleO: true,
      sho: true,
    }));
  }

  handleClos() {
    this.setState(() => ({
      sho: false,
    }));
  }

  render() {
    return template.call(this);
  }
}

export default Header;
