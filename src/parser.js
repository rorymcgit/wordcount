"use strict";

const fs = require("fs");
const counter = require("../src/counter");


function Parser(filename) {
  this.file = filename;
}

Parser.prototype.parse = function() {
  var data = this._readFile();
  var lowercaseData = this._lowercaseString(data);
  return this._removePunctuation(lowercaseData);
}

Parser.prototype._readFile = function() {
  return fs.readFileSync(this.file);
}

Parser.prototype._lowercaseString = function(data) {
  return data.toString().toLowerCase();
}

Parser.prototype._removePunctuation = function(data) {
  return data.match(/[^_\W\d]+/g);
}

module.exports = Parser;
