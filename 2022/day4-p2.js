const file = require("./fileRead.js");

let sum = 0;

file.forEach((val) => {
  let num = val.split(",");

  let first = num[0].split("-").map((n) => Number(n));
  let second = num[1].split("-").map((n) => Number(n));
  if (second[0] >= first[0] && second[0] <= first[1]) {
    sum++;
  } else if (first[0] >= second[0] && first[0] <= second[1]) {
    sum++;
  }
});

console.log(sum);
