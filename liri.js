require("dotenv").config();

const fs = require("fs")
const keys = require("./keys.js");
const axios = require("axios");
const spotify = require("node-spotify-api");


// api keys
const spotifyKey = new spotify(keys.spotify);
const seatGeekKey = new seatGeek(keys.seatgeek);

let [node, file, liriCommands, userInput, ...args] = process.argv;

function userCommands(liriCommands, userInput) {
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
function spotifySong(songName) {
  spotify.search({ type: 'track', query: 'songName || The Sign', limit: 10 }, function (err, data) {
    if (err) {
      return console.log('An error occurred, try one of these commands: spotify-this-song; concert-this; movie-this; do-what-it-says');
    };

    console.log(data);
  });
};

spotifySong();
console.log(spotifySong);

// function for seat geek concert search
function seatGeekConcert(artist) {

  const clientid = ""
  const clientsecret = ""

  var queryUrl = "https://api.seatgeek.com/2/events?performers.slug=" + artist + "?client_id=" + clientid + "&client_secret=" + clientsecret;

  axios.get(queryUrl)
    .then((result) => {
      const { title, datetime_local, venue } = result.data;
      console.log(`${title}`);
      console.log(`${datetime_local}`);
      console.log(`${venue}`);
    })
    .catch((err) => {
      console.log('An error occurred, try one of these commands: spotify-this-song; concert-this; movie-this; do-what-it-says');
    })
};

// function for movie search
function omdbMovie(movieName) {
 
  // const movieName = 
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName || "Mr. Nobody" + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl)
    .then((result) => {
      const { Title, Year, imdbRating, tomatoRating, Country, Language, Actors, Plot } = result.data;
      console.log(`${Title} was released in ${Year}.`);
      console.log(`The IMDB rating for this movie is ${imdbRating}.`);
      console.log(`The Rotten Tomatoes rating for this movie is ${tomatoRating}.`);
      console.log(`This film was produced in: ${Country}`);
      console.log(`This film is available in: ${Language}`);
      console.log(`The actors in this filme are: ${Actors}`);
      console.log(`Short plot description: ${Plot}`);
    })
    .catch((err) => {
      console.log('An error occurred, try one of these commands: spotify-this-song; concert-this; movie-this; do-what-it-says');
    })
};

// function for do this
function doThis() {

  fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log('An error occurred, try one of these commands: spotify-this-song; concert-this; movie-this; do-what-it-says');
    }

    // We will then print the contents of data
    console.log(data);

    // Then split it by commas (to make it more readable)
    const command = data.split(",");

  });

};