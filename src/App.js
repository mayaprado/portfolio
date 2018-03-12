import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


export default class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Navbar />
        <Home />
        <div className="Section-container">
          <Bio />
          <Projects />
          <Contacts />
          <Footer />
        </div>
      </div>
    );
  }
}

