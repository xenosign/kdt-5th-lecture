input = [3, 7, 9901];

// const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

let answer = [];
let compare = 1;
let len = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === 1) {
    answer.push("1");
  } else {
    len = (input[i] + "").length;
    compare = (compare + "").padEnd(len * 3, "1");
    compare = +compare;
    while (true) {
      if (compare % input[i] === 0) {
        answer.push((compare + "").length);
        break;
      }
      compare = compare * 10 + 1;
      // compare = Number(compare);
    }
  }
}
console.log(answer.join("\n"));