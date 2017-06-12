"use strict";

const expect = require("chai").expect;
const Parser = require("../src/parser");

describe("Parse text file", () => {
  var testFile = "./spec/test.txt";
  var parser = new Parser(testFile);
  var expectedData = ["the", "quick", "brown", "meerkat", "jumps", "over", "the", "lazy", "dog", "the", "brown", "meerkat", "is", "quick", "the", "dog", "is", "lazy", "doesnt", "dont", "doesnt", "dont"];

  it("makes an array of only words in the text file", () => {
    expect(parser.parse()).to.eql(expectedData);
  });

  it("downcases words", () => {
    expect(parser.parse()[0]).to.eql("the");
  })
});
