const Counter = require("./src/counter"),
  Parser = require("./src/parser"),
  PrimeChecker = require("./src/primeChecker");

const filenameArg = process.argv[2];
console.log("command line argument: ", filenameArg);


const primeChecker = new PrimeChecker();
const counter = new Counter(primeChecker);

const parser = new Parser(filenameArg);
const allWords = parser.parse();

const allWordCountObjects = counter.countWordFrequency(allWords);


var sortedWordCountObjects = sortArrayByCount(allWordCountObjects);

// console.log(sortedWordCountObjects);

printToConsole(sortedWordCountObjects);


// function sortArrayByCount(inputArray) {
//   return inputArray.sort(function(a, b){
//     return b.count - a.count;
//   });
// }
//
// function printToConsole(arrayToPrint) {
//   arrayToPrint.forEach(function(wordObject) {
//     var tabs;
//     if (isLongerThanATab(wordObject['word'])){
//       tabs = "\t\t";
//     } else {
//       tabs = "\t\t\t";
//     }
//     console.log("Word: ", wordObject['word'],
//                 tabs,
//                 "Count: ", wordObject['count'],
//                 "\t\t",
//                 "Count is Prime? ", wordObject['countIsPrime']);
//   });
// }
//
// function isLongerThanATab(word) {
//   return word.length > 7;
// };
