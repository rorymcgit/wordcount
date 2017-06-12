"use strict";

const expect = require("chai").expect;
const parser = require("../src/parser");
const fs = require("fs");

describe("Parse text file", () => {
  it("makes an array of only words in the text file", () => {
    var testFilename = "./spec/test.txt";
    var expectedData = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "The", "brown", "fox", "is", "quick", "The", "dog", "is", "lazy"];
    expect(parser(testFilename)).to.eql(expectedData);
  });
});
