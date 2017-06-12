"use strict";

const expect = require("chai").expect;
const parser = require("../src/parser");

describe("Parse text file", () => {
  var testFile = "./spec/test.txt";
  var expectedData = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "the", "brown", "fox", "is", "quick", "the", "dog", "is", "lazy"];

  it("makes an array of only words in the text file", () => {
    expect(parser(testFile)).to.eql(expectedData);
  });

  it("downcases words", () => {
    expect(parser(testFile)[0]).to.eql("the");
  })
});
