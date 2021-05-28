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
module.exports = router;
