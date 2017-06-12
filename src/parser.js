"use strict";

const fs = require("fs");

function parser(filename) {
  var data = fs.readFileSync(filename).toString().toLowerCase();
  var strippedData = data.match(/[^_\W\d]+/g);
  // console.log("stripped: ", strippedData);
  return strippedData;
}

module.exports = parser;
