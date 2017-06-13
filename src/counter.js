"use strict";

const isPrime = require("./isPrime");

function counter(words) {
  var result = words.reduce(function(allWords, word) {
    if (word in allWords) {
      allWords[word]++;
    }
    else {
      allWords[word] = 1;
    }
    return allWords;
  }, {});

  var keys = Object.keys(result)
  var values = Object.values(result)

  var finalArray = [];

  for (var k = 0; k < keys.length; k++) {
    var wordObject = {};
    wordObject['word'] = keys[k];
    wordObject['count'] = values[k];
    wordObject['countIsPrime'] = isPrime(values[k]);
    finalArray.push(wordObject);
  }
  return finalArray;
}

module.exports = counter;
