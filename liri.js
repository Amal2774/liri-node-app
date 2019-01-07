require("dotenv").config();
require("node-spotify-api");
require("")
require("./keys.js");

const axios= require("axios");
const inquirer = require('');

// consts for api keys
const spotifyKey = keys.spotify;
const sgKey= keys.seatgeek;


switch (liri.js, userInput) {
  case "spotify-this-song":
    spotifySong();
    break;

  case "concert-this":
    seatGeekConcert();
    break;

  case "movie-this":
    omdbMovie();
    break;

  case "do-what-it-says":
    doThis();
    break;

  default:
  console.log("/n" + "Something went horribly wrong... try one of these commands" +
    "/n" + "spotify-this-song" +
    "/n" + "concert-this" +
    "/n" + "movie-this" +
    "/n" + "do-what-it-says"
  );

}

// function to spotify song search
function spotifySong (){

}

// function for seat geek concert search
function seatGeekConcert (){

}

// function for movie search
function omdbMovie (){

}

// function for do this
function doThis (){

}