"use strict";

function Counter(primeChecker) {
  this.primeChecker = primeChecker;
}

Counter.prototype.countWordFrequency = function(words) {
  var result = words.reduce(function(allWords, word) {
    if (word in allWords) {
      allWords[word]++;
    }
    else {
      allWords[word] = 1;
    }
    return allWords;
  }, {});
  return this._buildObjectsArray(result);
};

Counter.prototype._buildObjectsArray = function(wordAndCount) {
  var [keys, values] = [Object.keys(wordAndCount), Object.values(wordAndCount)]
  var allObjectsArray = [];
  
  for (var k = 0; k < keys.length; k++) {
    var wordObject = {};
    wordObject['word'] = keys[k];
    wordObject['count'] = values[k];
    wordObject['countIsPrime'] = this.primeChecker.isPrime(values[k]);
    allObjectsArray.push(wordObject);
  }
  return allObjectsArray;
}

module.exports = Counter;
