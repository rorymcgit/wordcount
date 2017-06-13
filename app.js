"use strict";

const Counter = require("./src/counter"),
  Parser = require("./src/parser"),
  PrimeChecker = require("./src/primeChecker"),
  express = require("express"),
  fileUpload = require('express-fileupload'),
  app = express();

var port = 3000;

app.set("view engine", "ejs");
app.use(fileUpload());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("landingPage");
});

app.post("/file-upload", (req, res) => {
  var sampleFile;

  if (!req.files) {
    res.send("No files were uploaded.");
    return;
  }

  sampleFile = req.files;
  // console.log(sampleFile.file.data.toString());
  console.log(sampleFile);
  sampleFile.file.mv(__dirname + '/' + sampleFile.file.name, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      // , { file: sampleFile.file.data.toString() }
      console.log("app.js: File uploaded ");
    }
  });
});

app.listen(port, () => {
  console.log("App is live on port " + port);
});
