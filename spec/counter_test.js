"use strict";

const expect = require("chai").expect;
const counter = require("../src/counter");

describe("Count words", () => {
  it("returns an object", () => {
    expect(counter([])).to.eql([]);
  });

  it("counts recurring words", () => {
    var testWords = ["the", "meerkat", "is", "the", "fastest"];
    var expectedObject = [ { "word" : "the", "count" : 2, "isPrime" : true }, { "word" : "meerkat", "count" : 1, "isPrime" : false }, { "word" : "is", "count" : 1, "isPrime" : false }, { "word" : "fastest", "count" : 1, "isPrime" : false } ];
    expect(counter(testWords)).to.eql(expectedObject);
  })
});
