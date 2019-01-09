require("dotenv").config();

const fs = require("fs")
const keys = require("./keys.js");
const axios= require("axios");

// api keys
const spotify = new spotify(keys.spotify);
const seatGeek= new seatGeek(keys.seatgeek);

let [node, file, liriCommands, userInput, ...args] = process.argv;

function userCommands (liriCommands, userInput){
  switch (liriCommands) {
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
    console.log("/n" + "Oops... try one of these commands: " +
      "/n" + "spotify-this-song" +
      "/n" + "concert-this" +
      "/n" + "movie-this" +
      "/n" + "do-what-it-says"
    );

  };
};

// function to spotify song search
function spotifySong(songName){
  spotify.search({ type: 'track', query: 'songName', limit: 10 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
};

spotifySong();
console.log(spotifySong);

// function for seat geek concert search
function seatGeekConcert (){

}

// function for movie search
function omdbMovie (movieName){

  // const movieName = 
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName || "Mr. Nobody" + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl)
  .then((result) => {
      const { Title, Year, imdbRating } = result.data;
      console.log(`${Title} was released in ${Year}.`);
      console.log(`The IMDB Rating for this movie is ${imdbRating}.`);
  })
  .catch((err) => {
      console.log(err);
  })
};

// function for do this
function doThis (){

}