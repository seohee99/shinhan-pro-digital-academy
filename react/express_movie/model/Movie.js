const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  code: String,
  content_type: String,
  title: String,
  year: Number,
  poster: Object,
  badges: Array,
  on_watchaplay: Boolean,
  ratings_avg: Number,
  director_names: Array,
  stillcut: Object,
  nations: Array,
  genres: Array,
  current_context: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
