"use strict";

const counter = require("./src/counter"),
  Parser = require("./src/parser"),
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

app.post('/file-upload', function(req, res) {
  var sampleFile;
  if (!req.files) {
    res.send('No files were uploaded.');
    return;
  }
  sampleFile = req.files;
  console.log(sampleFile);
  sampleFile.file.mv(__dirname + '/files/' + sampleFile.file.name, function(err) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send('File uploaded!');
    }
  });
});

app.listen(port, function() {
  console.log("App is live on port " + port);
});

// var parser = new Parser("Railway-Children-by-E-Nesbit.txt");
// console.log(counter(parser.parse()));
