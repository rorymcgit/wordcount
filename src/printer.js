"use strict";

function Printer() {
}

Printer.prototype.sortArrayByCount = function(inputArray) {
  return inputArray.sort(function(a, b){
    return b.count - a.count;
  });
}

Printer.prototype.printToConsole = function(arrayToPrint) {
  arrayToPrint.forEach(function(wordObject) {
    var tabs;
    if (Printer.prototype._isLongerThanATab(wordObject['word'])){
      tabs = "\t\t";
    } else {
      tabs = "\t\t\t";
    }
    console.log("Word: ", wordObject['word'],
                tabs,
                "Count: ", wordObject['count'],
                "\t\t",
                "Count is prime? ", wordObject['countIsPrime']);
  });
}

Printer.prototype._isLongerThanATab = function(word) {
  return word.length > 7;
};

module.exports = Printer;
