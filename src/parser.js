"use strict";

const fs = require("fs");
const counter = require("../src/counter");


function Parser(filename) {
  this.file = filename;
}

Parser.prototype.parse = function() {
  var data = this._readFile();
  var lowercaseData = this._lowercaseString(data);
  var allValues = this._createAllValuesArray(lowercaseData);
  var stripped = this._removePunctuation(allValues);
  return this._removeNullValues(stripped);
}

Parser.prototype._readFile = function() {
  return fs.readFileSync(this.file);
}

Parser.prototype._lowercaseString = function(data) {
  return data.toString().toLowerCase();
}

Parser.prototype._createAllValuesArray = function(data) {
  return data.replace(/\s+/g, " ").split(" ");
};

Parser.prototype._removePunctuation = function(allValues) {
  var strippedValues = [];
  allValues.forEach((element) => {
    strippedValues.push(element.replace(/[_\W\d]+/g, ""));
  });
  return strippedValues;
};

Parser.prototype._removeNullValues = function(strippedValues) {
  return strippedValues.filter(function(word){
    return word.length > 0;
  });
};

module.exports = Parser;
