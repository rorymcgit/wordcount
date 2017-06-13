"use strict";

const expect = require("chai").expect;
const PrimeChecker = require("../src/primeChecker");

describe("Prime checker", () => {

  beforeEach("instantiate Prime Checker", () => {
    this.primeChecker = new PrimeChecker();
  });

  it("returns true for the prime number 3", () => {
    expect(this.primeChecker.isPrime(3)).to.eql(true);
  });

  it("returns false for the non-prime number 4", () => {
    expect(this.primeChecker.isPrime(4)).to.eql(false);
  });

  it("returns true for the large prime number 113", () => {
    expect(this.primeChecker.isPrime(113)).to.eql(true);
  });
});
