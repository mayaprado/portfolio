import React, { Component } from 'react';
import '../App.css';


export default class Contacts extends Component {
  render() {
    return (
      <div id="contacts" className="bio">
        <h1>Contacts</h1>
        <div className="contacts-container">
          <img src="../phone.png" alt="phone" height="30px" /><span>... (347)-481-9518</span>
          <br />
          <img src="../email.png" alt="phone" height="30px" /><span>... maiya.prado@gmail.com</span>
          <br />
          <img src="../linkedin.png" alt="phone" height="30px" /><span><a href="https://www.linkedin.com/in/maya-prado">... /maya-prado</a></span>
          <br />
          <img src="../git.png" alt="phone" height="30px" /><span><a href="https://github.com/mayaprado">...mayaprado</a></span>
          <br />
        </div>
      </div>
    );
  }
}