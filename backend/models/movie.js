const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  mylist: [
    {
      title: String,
      id: String,
      img: String,
    },
  ],
  recommendations: [
    {
      title: String,
      id: String,
      img: String,
    },
  ],
});

/* const ListSchema = new Schema({
  title: String,
  id: String,
  img: String,
}); */

const Movie = mongoose.model("movies", MovieSchema);

module.exports = Movie;
