const fs = require("fs");
let arr = null;
let move = {
  A: "R",
  B: "P",
  C: "S",
  X: "R",
  Y: "P",
  Z: "S",
};
let score = {
  X: 1,
  Y: 2,
  Z: 3,
};
let winMoves = {
  A: "Y",
  B: "Z",
  C: "X",
};
let drawMoves = {
  A: "X",
  B: "Y",
  C: "Z",
};
let loseMoves = {
  A: "Z",
  B: "X",
  C: "Y",
};
let checkWin = (a, b) => {
  return (
    (move[a] === "R" && move[b] === "P") ||
    (move[a] === "S" && move[b] === "R") ||
    (move[a] === "P" && move[b] === "S")
  );
};
arr = fs.readFileSync("day2.txt", "utf8", (e, d) => {
  if (e) {
    console.log(e);
    return;
  }
  return d;
});
arr = arr.split(/\r?\n/);
let f_score = 0;

arr.forEach((val) => {
  let [a, b] = val.split(" ");
  //   if (move[a] === move[b]) {
  // f_score += 3 + score[b];
  //   } else if (checkWin(a, b)) {
  // f_score += 6 + score[b];
  //   } else {
  // f_score += 0 + score[b];
  //   }

  if (b === "X") f_score += 0 + score[loseMoves[a]];

  if (b === "Y") f_score += 3 + score[drawMoves[a]];
  if (b === "Z") f_score += 6 + score[winMoves[a]];
});

console.log(f_score);
