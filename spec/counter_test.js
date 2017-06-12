"use strict";

const expect = require("chai").expect;
const counter = require("../src/counter");

describe("Count words", () => {
  it("returns an object", () => {
    expect(counter([])).to.eql({});
  });

  it("counts recurring words", () => {
    var testWords = ["the", "dog", "is", "the", "fastest"];
    var expectedObject = { "the" : 2, "dog" : 1, "is" : 1, "fastest" : 1 };
    expect(counter(testWords)).to.eql(expectedObject);
  })
});
