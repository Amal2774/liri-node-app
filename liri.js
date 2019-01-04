require("dotenv").config();
require("node-spotify-api");
require("")
require("./keys.js");

const axios= require("axios");
const spotifyKey = keys.spotify;
const sgKey= keys.seatgeek;


if (action === "total") {
    total();
}   else if (action === "deposit") {
    deposit();
}   else if (action === "withdraw") {
    withdraw();
}   else if (action === "lotto") {
    lotto();
}
  

  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function (response) {
    // Then we print out the imdbRating
    const { imdbRating, Title, Rated, Year } = response.data;
    // const Title = response.data.Title
    // const imdbRating = response.data.imdbRating
    // const Year = response.data.Year
    // const Rated = response.data.Rated
    console.log(`The movie's rating is: ${imdbRating}
The movie's title is: ${Title}
The movie's Release Year is ${Year}`);
  }
);