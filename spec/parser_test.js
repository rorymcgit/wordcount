"use strict";

const expect = require("chai").expect;
const sinon = require("sinon");
require("chai").use(require("sinon-chai"));
const Parser = require("../src/parser");

describe("Parse text file", () => {

  beforeEach('instantiate parser', () => {
    var testFile = "./spec/test.txt";
    this.parser = new Parser(testFile);
    this.expectedData = ["the", "quick", "brown", "meerkat", "jumps", "over", "the", "lazy", "dog", "the", "brown", "meerkat", "is", "quick", "the", "dog", "is", "lazy", "a", "doesnt", "dont", "doesnt", "dont"];
  });

  it("makes an array of only words in the text file", () => {
    expect(this.parser.parse()).to.eql(this.expectedData);
  });

  it("downcases words", () => {
    expect(this.parser.parse()[0]).to.eql("the");
  });

  it("parse calls _readFile", () => {
    const _readFileSpy = sinon.spy(this.parser, '_readFile');
    this.parser.parse();
    expect(_readFileSpy).calledOnce;
  });

  it("parse calls _lowercaseString", () => {
    const _lowercaseStringSpy = sinon.spy(this.parser, '_lowercaseString');
    this.parser.parse();
    expect(_lowercaseStringSpy).calledOnce;
  });

  it("parse calls _removeNewLines", () => {
    const _removeNewLinesSpy = sinon.spy(this.parser, '_removeNewLines');
    this.parser.parse();
    expect(_removeNewLinesSpy).calledOnce;
  });

  it("parse calls _removePunctuation", () => {
    const _removePunctuationSpy = sinon.spy(this.parser, '_removePunctuation');
    this.parser.parse();
    expect(_removePunctuationSpy).calledOnce;
  });

  it("parse calls _removeNullValues", () => {
    const _removeNullValuesSpy = sinon.spy(this.parser, '_removeNullValues');
    this.parser.parse();
    expect(_removeNullValuesSpy).calledOnce;
  });
});
