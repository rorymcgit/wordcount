"use strict";

const expect = require("chai").expect;
const sinon = require("sinon");
require("chai").use(require("sinon-chai"));
const Printer = require("../src/Printer");

describe("Prints to console", () => {

  beforeEach("instantiate printer", () => {
    this.printer = new Printer();
    this.testWordObjectsArray = [{ "word" : "the",     "count" : 2, "countIsPrime" : true },
                                 { "word" : "meerkat", "count" : 8, "countIsPrime" : false },
                                 { "word" : "is",      "count" : 3, "countIsPrime" : true },
                                 { "word" : "fastest", "count" : 1, "countIsPrime" : false }
                                ];
  });

  it("sorts an array of word objects by count (largest first)", () => {
    var firstObject = this.printer.sortArrayByCount(this.testWordObjectsArray)[0]
    expect(firstObject).to.eql({ "word" : "meerkat", "count" : 8, "countIsPrime" : false });
  });

  it("returns true for a string longer than 7 characters", () => {
    expect(this.printer._isLongerThanATab("SuricataSuricatta")).to.be.true;
  });

  it("returns false for a string shorter than or equal to 7 characters", () => {
    expect(this.printer._isLongerThanATab("Meerkat")).to.be.false;
  });

  // it("printToConsole calls isLongerThanATab", () => {
  //   const _isLongerThanATabSpy = sinon.spy(this.printer, "_isLongerThanATab");
  //   this.printer.printToConsole(this.testWordObjectsArray);
  //   expect(_isLongerThanATabSpy).calledOnce;
  // });


});
