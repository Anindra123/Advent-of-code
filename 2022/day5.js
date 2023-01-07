let fr = require("./fileRead.js");

fr = fr.map((f) => {
  let out = [...f.split(" ")].filter((n) => parseInt(n)).map((n) => Number(n));
  return out;
});

let container = {
  1: ["W", "D", "G", "B", "H", "R", "V"],
  2: ["J", "N", "G", "C", "R", "F"],
  3: ["L", "S", "F", "H", "D", "N", "J"],
  4: ["J", "D", "S", "V"],
  5: ["S", "H", "D", "R", "Q", "W", "N", "V"],
  6: ["P", "G", "H", "C", "M"],
  7: ["F", "J", "B", "G", "L", "Z", "H", "C"],
  8: ["S", "J", "R"],
  9: ["L", "G", "S", "R", "B", "N", "V", "M"],
};

fr.forEach((f) => {
  for (let i = 0; i < f[0]; i++) {
    container[f[2]].push(container[f[1]].pop());
  }
});

let res = "";

for (const k in container) {
  res += container[k].pop();
}
console.log(res);
