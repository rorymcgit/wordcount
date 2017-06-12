const fs = require("fs");

function parser(filename) {
  return fs.readFileSync(filename).toString().split(" ");
}

module.exports = parser;
