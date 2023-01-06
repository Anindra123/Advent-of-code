const file = require("./fileRead.js");

let sum = 0;

file.forEach((val) => {
  let num = val.split(",");

  let first = num[0].split("-");
  let second = num[1].split("-");
  if (
    (Number(first[0]) <= Number(second[0]) &&
      Number(second[1]) <= Number(first[1])) ||
    (Number(second[0]) <= Number(first[0]) &&
      Number(first[1]) <= Number(second[1]))
  )
    sum++;
});

console.log(sum);
