import React, { Component } from 'react';
import '../App.css';
import Scrollchor from 'react-scrollchor';


export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h3><Scrollchor to="#bio" className="nav-link">ABOUT</Scrollchor></h3>
        <h3><Scrollchor to="#projects" className="nav-link">PROJECTS</Scrollchor></h3>
        <h3><Scrollchor to="#contacts" className="nav-link">CONTACTS</Scrollchor></h3>
      </div>
    );
  }
}