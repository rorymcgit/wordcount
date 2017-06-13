const Counter = require("./src/counter"),
  Parser = require("./src/parser"),
  PrimeChecker = require("./src/primeChecker"),
  Printer = require("./src/printer");

const filenameArg = process.argv[2];
console.log("The filepath of your chosen file is: ", filenameArg);

const primeChecker = new PrimeChecker();
const counter = new Counter(primeChecker);
const parser = new Parser(filenameArg);

const allWords = parser.parse();
const allWordCountObjects = counter.countWordFrequency(allWords);

const printer = new Printer();

const sortedWordCountObjects = printer.sortArrayByCount(allWordCountObjects);

printer.printToConsole(sortedWordCountObjects);
