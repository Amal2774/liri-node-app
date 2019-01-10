console.log('this is loaded');

module.exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
};

module.exports.seatgeek = {
    id: process.env.SEATGEEK_ID,
    secret: process.env.SEATGEEK_SECRET,
};