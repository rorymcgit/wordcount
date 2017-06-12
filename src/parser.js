"use strict";

const fs = require("fs");

function parser(filename) {
  var data = fs.readFileSync(filename).toString();
  var strippedData = data.match(/[^_\W\d]+/g).join(" ");
  // console.log("stripped: ", strippedData.split(" "));
  return strippedData.split(" ");
}

module.exports = parser;
