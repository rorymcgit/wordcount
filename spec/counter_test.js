"use strict";

const expect = require("chai").expect;
const counter = require("../src/counter");

describe("Count words", () => {
  it("returns an object", () => {
    expect(counter([])).to.eql({});
    // expect(counter([])).to.eql([{}]);
  });

  it("counts recurring words", () => {
    var testWords = ["the", "meerkat", "is", "the", "fastest"];
    // var expectedObject = [ { "word" : "the", "count" : 2 }, { "word" : "meerkat", "count" : 1 }, { "word" : "is", "count" : 1 }, { "word" : "fastest", "count" : 1 } ];
    var expectedObject = { "the" : 2, "meerkat" : 1, "is" : 1, "fastest" : 1 };
    expect(counter(testWords)).to.eql(expectedObject);
  })
});
