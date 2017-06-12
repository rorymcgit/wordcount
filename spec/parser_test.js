"use strict";

const expect = require("chai").expect;
const parser = require("../src/parser");
const fs = require("fs");

describe("Parse text file", () => {
  var testFilename = "./spec/test.txt";
  var expectedData = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "the", "brown", "fox", "is", "quick", "the", "dog", "is", "lazy"];
  it("makes an array of only words in the text file", () => {
    expect(parser(testFilename)).to.eql(expectedData);
  });

  it("downcases every word", () => {
    expect(parser(testFilename)[0]).to.eql("the")
  })
});
