"use strict";

const expect = require("chai").expect;
const sinon = require("sinon");
require("chai").use(require("sinon-chai"));
const Counter = require("../src/counter");
const PrimeChecker = require("../src/primeChecker");

describe("Count words", () => {

  before('instantiate counter', () => {
    this.primeChecker = new PrimeChecker();
    this.counter = new Counter(this.primeChecker);
    this.testWords = ["the", "meerkat", "is", "the", "fastest"];
  });

  it("returns an empty array by default", () => {
    expect(this.counter.countWordFrequency([])).to.eql([]);
  });

  it("counts recurring words", () => {
    var expectedObject = [ { "word" : "the",     "count" : 2, "countIsPrime" : true },
                           { "word" : "meerkat", "count" : 1, "countIsPrime" : false },
                           { "word" : "is",      "count" : 1, "countIsPrime" : false },
                           { "word" : "fastest", "count" : 1, "countIsPrime" : false } ];
    expect(this.counter.countWordFrequency(this.testWords)).to.eql(expectedObject);
  });

  it("countWordFrequency calls _buildObjectsArray once", () => {
    const _buildObjectsArraySpy = sinon.spy(this.counter, '_buildObjectsArray');
    this.counter.countWordFrequency(this.testWords);
    expect(_buildObjectsArraySpy).to.have.been.calledOnce;
  });

  it("countWordFrequency calls isPrime once", () => {
    const isPrimeSpy = sinon.spy(this.primeChecker, 'isPrime');
    this.counter.countWordFrequency(this.testWords);
    expect(isPrimeSpy).callCount(4);
  });

});
