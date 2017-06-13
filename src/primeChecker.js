"use strict";

function PrimeChecker() {
}

PrimeChecker.prototype.isPrime = function(value) {
  for(var i = 2; i < value; i++) {
    if(value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

module.exports = PrimeChecker;
