const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

let sum = 0;
const mapArr = arr.map((item) => sum += item);

console.log(sum);

const str = "apple";

const obj = {
  nba: "lebron",
  soccer: "messi",
  baseball: "TMT",
}

for (item in obj) {
  console.log(obj[item]);
}


for (let letter in str) {
  console.log(letter);
}