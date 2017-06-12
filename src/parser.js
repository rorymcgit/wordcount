"use strict";

const fs = require("fs");
const counter = require("../src/counter");


function Parser(filename) {
  this.file = filename;
}

Parser.prototype.parse = function() {
  var data = this._readFile();
  var lowercaseData = this._lowercaseString(data);
  // console.log(this._removePunctuation(lowercaseData));
  return this._removePunctuation(lowercaseData);
}

Parser.prototype._readFile = function() {
  return fs.readFileSync(this.file);
}

Parser.prototype._lowercaseString = function(data) {
  return data.toString().toLowerCase();
}

Parser.prototype._removePunctuation = function(data) {
  var allValues = data.replace(/[^\D]/g, " ")
                      .replace(/\s+/g, "/")
                      .split("/");
  var strippedValues = [];
  allValues.forEach((element) => {
    strippedValues.push(element.replace(/[_\W\d]+/g, ""));
  });
  return strippedValues.filter(function(word){
    return word.length > 1;
  });
}

module.exports = Parser;
