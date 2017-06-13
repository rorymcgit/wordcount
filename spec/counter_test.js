"use strict";

const expect = require("chai").expect;
const counter = require("../src/counter");

describe("Count words", () => {
  it("returns an object", () => {
    expect(counter([])).to.eql([]);
  });

  it("counts recurring words", () => {
    var testWords = ["the", "meerkat", "is", "the", "fastest"];
    var expectedObject = [ { "word" : "the",     "count" : 2, "countIsPrime" : true },
                           { "word" : "meerkat", "count" : 1, "countIsPrime" : false },
                           { "word" : "is",      "count" : 1, "countIsPrime" : false },
                           { "word" : "fastest", "count" : 1, "countIsPrime" : false } ];
    expect(counter(testWords)).to.eql(expectedObject);
  })
});
