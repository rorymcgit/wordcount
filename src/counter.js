"use strict";

function counter(words) {
  return words.reduce(function (allWords, word) {
    if (word in allWords) {
      allWords[word]++;
    }
    else {
      allWords[word] = 1;
    }
    return allWords;
    }, {});
}

module.exports = counter;
