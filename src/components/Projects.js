import React, { Component } from 'react';
import '../App.css';


export default class Projects extends Component {
  render() {
    return (
      <div className="bio" id="projects">
        <h1>My Projects</h1>
          <div className="aboutProject">
            <h2>PlanIt App</h2>
            <img src="../planit.png" alt="PlanIt App" />
            <p>PlanIt is a new innovative technology which brings peak efficiency making time constraints a thing of the past! It is intended for busy individuals who want to be able to maximize their time. Three external APIs are used: Yelp, GoodReads, and TicketMaster. This allows users to be able to add restaurants, movies, and books to their schedule. Technologies used to build this app: React, HTML, CSS, JavaScript, Node.js, Express.js, PostgreSQL, axios, moment, react-router-dom, react-big-calendar.</p>
            <a href="https://planit31.herokuapp.com">Link to Webpage</a>
            <br />
            <a href="https://github.com/mayaprado/planIt">Link to Github</a>
          </div>
          <div className="aboutProject">
            <h2>GoMars</h2>
            <img src="../gomars.png" alt="GoMars App" />
            <p> GoMars is an app for Earth inhabitants who got tired of living on this planet. The app is offering affordable real estate on Mars. There are also extra features like creating a personal account, checking out information on your neighbors, looking up a street view, adding houses to favorite list, looking up houses prices in different currencies. Technologies used to build this app: jQuery, HTML, CSS, JavaScript, Node.js, Express.js, PostgreSQL, axios, bcryptjs, body-parser, cookie-parser, dotenv, express, express-session, morgan, mustache-express, passport, passport-local, pg-promise, currency-converter.</p>
            <a href="https://go-mars.herokuapp.com/houses">Link to Webpage</a>
            <br />
            <a href="https://github.com/mayaprado/gomars">Link to Github</a>
          </div>
          <div className="aboutProject">
            <h2>Connect Four</h2>
            <img src="../connect.png" alt="Connect Four Game" />
            <p> Connect Four is a two-player connection game in which the players take turns dropping colored discs from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. Technologies used to build this game: JavaScript, HTML, CSS. </p>
            <a href="https://github.com/mayaprado/connect_Four">Link to Github</a>
          </div>
      </div>
    );
  }
}