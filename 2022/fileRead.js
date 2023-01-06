const fs = require("fs");
const prompt = require("prompt-sync")();
const quest = [
  {
    type: "input",
    name: "name",
    message: "What's your name?",
  },
];
let out = [];
const sumArr = [];
let fileName = prompt("Enter your file name :");

const getFileContents = () => {
  out = fs.readFileSync(`${fileName}`, "utf8");
  out = out.split(/\r?\n/);
  return out;
};
module.exports = getFileContents();
