"use strict";

const fs = require("fs");

function parser(filename) {
  var data = fs.readFileSync(filename).toString().toLowerCase();
  return data.match(/[^_\W\d]+/g);
}

module.exports = parser;
