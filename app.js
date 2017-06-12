"use strict";

const counter = require("./src/counter");
const parser = require("./src/parser");
const express = require("express");
const app = express();

var port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, function() {
  console.log("App is live on port " + port);
});

// console.log(counter(parser("Railway-Children-by-E-Nesbit.txt")));
