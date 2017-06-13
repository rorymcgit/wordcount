"use strict";

const expect = require("chai").expect;
const isPrime = require("../src/isPrime");

describe("Prime checker", () => {
  it("returns true for the prime number 3", () => {
    expect(isPrime(3)).to.eql(true);
  });

  it("returns false for the non-prime number 4", () => {
    expect(isPrime(4)).to.eql(false);
  });

  it("returns true for the large prime number 113", () => {
    expect(isPrime(113)).to.eql(true);
  });
});
