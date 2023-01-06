const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let out = [];
const sumArr = [];
let file = "";
const show = [{ type: "input", name: "name", question: "Enter file name :" }];
const readFile = () => {
  readline.question("Enter your file name :", (f) => {
    file = f;
    readline.close();
  });
};
const getFileContents = () => {
  out = fs.readFileSync(`${file}`, "utf8", (e, d) => {
    if (e) {
      console.log(e);
      return;
    }
    return d;
  });
  out = out.split(/\r?\n/);
  return out;
};
readFile();
console.log(getFileContents());
// export { getFileContents };
