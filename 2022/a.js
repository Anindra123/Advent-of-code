const fs = require("fs");
let arr = [];
const sumArr = [];
arr = fs.readFileSync("input.txt", "utf8", (e, d) => {
  if (e) {
    console.log(e);
    return;
  }
  return d;
});
arr = arr.split(/\r?\n/);
// console.log(arr);
let s = 0;
arr.forEach((n) => {
  if (n !== "") {
    s += Number(n);
  } else {
    sumArr.push(s);
    s = 0;
  }
});
let sorted = sumArr.sort((a, b) => a - b);
let one = sorted.pop();
let two = sorted.pop();
let three = sorted.pop();
let total = one + two + three;
console.log(total);
