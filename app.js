"use strict";

const counter = require("./src/counter"),
  parser = require("./src/parser"),
  express = require("express"),
  app = express();

var port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("landingPage");
});

app.listen(port, function() {
  console.log("App is live on port " + port);
});

// console.log(counter(parser("Railway-Children-by-E-Nesbit.txt")));
