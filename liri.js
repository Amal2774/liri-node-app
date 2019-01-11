require("dotenv").config();

const fs = require("fs")
const keys = require("./keys.js");
const axios = require("axios");
const spotify = require("node-spotify-api");


// api keys
const spotifyKey = new spotify(keys.spotify);

let [node, file, liriCommands, ...userInput] = process.argv;
let userInputStr = userInput.join(' ')
userCommands(liriCommands, userInputStr)
function userCommands(liriCommands, userInput) {
  switch (liriCommands) {
    case "spotify-this-song":
      spotifySong(userInput);
      break;

    case "concert-this":
      seatGeekConcert(userInput);
      break;

    case "movie-this":
      omdbMovie(userInput);
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
  if(!songName) {
    songName = "I Saw the Sign"
  }

  spotifyKey.search({ type: 'track', query: songName, limit: 10 }, function (err, data) {
    if (err) {
      return console.log('An error occurred, try one of these commands: spotify-this-song; concert-this; movie-this; do-what-it-says');
    };
    console.log("Artist: " + data.tracks.items[0].artists[0].name + "\nSong name: " + data.tracks.items[0].name +
    "\nAlbum Name: " + data.tracks.items[0].album.name + "\nPreview Link: " + data.tracks.items[0].preview_url);

  });
};


// function for seat geek concert search
function seatGeekConcert(artist) {

  const clientid = keys.seatgeek.id;
  const clientsecret = keys.seatgeek.secret;

  var queryUrl = "https://api.seatgeek.com/2/events?performers.slug=" + artist.split(' ').join('-') + "&client_id=" + clientid + "&client_secret=" + clientsecret;

  axios.get(queryUrl)
    .then((result) => {
      const { title, datetime_local, venue } = result.data.events[0];
      console.log(`${title}`);
      console.log(`${datetime_local}`);
      console.log(`${venue.name}`);
      console.log(`${venue.city + ", " + venue.state}`);
    })
    .catch((err) => {
      console.log(err);
    })
};

// function for movie search
function omdbMovie(movieName) {
 if(!movieName) {
   movieName = "Mr. Nobody"
 }
  // const movieName = 
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

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
function doThis(input) {

  fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(err);
    }

    // We will then print the contents of data
    console.log(data);

    // Then split it by commas (to make it more readable
    let splits = data.split(",");

    let liriCommands = splits[0];
    console.log(liriCommands);
    let songName = splits[1];
    console.log(songName);

  });

};