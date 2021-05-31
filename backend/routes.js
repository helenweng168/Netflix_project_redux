const express = require("express");
const router = express.Router();
const Movie = require("./models/movie");

router.get("/movies", function (req, res) {
  Movie.find({})
    .then((data) => {
      //console.log("Router", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

router.post("/movies_post/:id", function (req, res) {
  Movie.findOne({}, function (err, movie) {
    if (err) {
      console.log("error");
    } else {
      let rec_item = movie.recommendations.find((x) => x.id === req.params.id);
      let rec_index = movie.recommendations.indexOf({ id: req.params.id });
      movie.mylist.push(rec_item);
      movie.recommendations.splice(rec_index);
      movie.save(function (err, data) {
        console.log(movie);
        if (err) return console.error(err);
        res.send("Posted Movie: " + req.body.title);
      });
    }
  });
});

router.post("/movies_delete/:id", function (req, res) {
  Movie.findOne({}, function (err, movie) {
    if (err) {
      console.log("error");
    } else {
      let mylist_item = movie.mylist.find((x) => x.id === req.params.id);
      let mylist_index = movie.mylist.indexOf({ id: req.params.id });
      movie.recommendations.push(mylist_item);
      movie.mylist.splice(mylist_index);
      movie.save(function (err, data) {
        console.log(movie);
        if (err) return console.error(err);
        res.send("Deleted Movie: " + req.body.title);
      });
    }
  });
});

module.exports = router;
