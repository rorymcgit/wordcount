"use strict";

const isPrime = require("./isPrime");

function counter(words) {
  var compressed = [];
	var copy = words.slice(0);

	for (var i = 0; i < words.length; i++) {
		var myCount = 0;
		for (var w = 0; w < copy.length; w++) {
			if (words[i] == copy[w]) {
				myCount++;
				delete copy[w];
			}
		}

		if (myCount > 0) {
			var a = new Object();
			a.word = words[i];
			a.count = myCount;
      a.isPrime = isPrime(myCount);
			compressed.push(a);
		}
	}
  // console.log(compressed);
	return compressed;
}

module.exports = counter;
