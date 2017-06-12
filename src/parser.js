"use strict";

const fs = require("fs");
const counter = require("../src/counter");

function parser(filename) {
  var data = _readFile(filename);
  var lowercaseData = _lowercaseString(data);
  return _removePunctuation(lowercaseData);
}

function _readFile(filename) {
  return fs.readFileSync(filename);
}

function _lowercaseString(data) {
  return data.toString().toLowerCase();
}

function _removePunctuation(data) {
  return data.match(/[^_\W\d]+/g);
}

module.exports = parser;
