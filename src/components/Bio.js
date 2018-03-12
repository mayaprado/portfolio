import React, { Component } from 'react';
import '../App.css';


export default class Bio extends Component {
  render() {
    return (
      <div className="bio" id="bio">
        <h1>About me</h1>
        <div className="column">
          <div className="photo">
            <img src="../placeholder.jpg" />
          </div>
          <div className="about">
            <h2>Hi! My name is Maya</h2>
            <p>I am a Web Developer with a background in Product Management and Intellectual Property Law. In every project my goal is to build a product that will create value for a user. I have an optimistic mindset and I try to live in a present moment. I’m also a pianist and I find programming very similar to composing – it’s logical and creative at the same time. 
  </p>
          </div>
        </div>
      </div>
    );
  }
}