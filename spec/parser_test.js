"use strict";

const expect = require("chai").expect;
const parser = require("../src/parser");
const fs = require("fs");

describe("Count words", () => {
  it("makes an array of all words/characters in the text file", () => {
    var testFilename = "./spec/test.txt";
    var expectedData = ["1:", "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog.\n"]
    expect(parser(testFilename)).to.eql(expectedData);
  });
});
