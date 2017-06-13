"use strict";

const isPrime = require("./isPrime");

function counter(words) {
  var results = [];
	var copy = words.slice(0);

	for (var i = 0; i < words.length; i++) {
		var wordCount = 0;
		for (var w = 0; w < copy.length; w++) {
			if (words[i] == copy[w]) {
				wordCount++;
				delete copy[w];
			}
		}

		if (wordCount > 0) {
			var wordObject = new Object();
			wordObject.word = words[i];
			wordObject.count = wordCount;
      wordObject.countIsPrime = isPrime(wordCount);
			results.push(wordObject);
		}
	}
  console.log(results);
	return results;
}

module.exports = counter;
