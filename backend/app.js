const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./db");
//const passport = require("passport");
const movies = require("./routes");

mongoose.connect(config.DB, { useNewUrlParser: true }).then(() => {
  console.log("Database is connected!");
});
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", movies);

app.get("/", function (req, res) {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
