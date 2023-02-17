let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

const sameArr2 = [];
const diffArr2 = [];

// fruits1.map((item) => {
//   if (fruits2.includes(item)) {
//     sameArr.push(item);
//   } else {
//     diffArr.push(item);
//   }
// })

const sameArr = fruits1.map(item => fruits2.includes(item));

const diffArr = fruits1.filter(item => !fruits2.includes(item));

console.log(sameArr);
console.log(diffArr);

const fruits3 = ["Apple", "Banana", "Cherry"];
const findResult = fruits3.find((item) => {
  return /^A/.test(item);
});
const findIndexResult = fruits3.findIndex(item => /^B/.test(item));

console.log(findResult);
console.log(findIndexResult);

const numbers5 = [1, 2, 3, 4, 5];
const sumResult = numbers5.reduce(function (acc, item, index, og) {
  return acc += item;
}, 10);
console.log(sumResult);

const numbers6 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const resultReduce = numbers6.reduce((acc, item) => {
  if (item < 0) {
    acc[0] += 1;
  } else {
    acc[1] += 1;
  }
  return acc;
}, [0, 0]);

console.log(resultReduce);

// 리듀스 실습
const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

const sumResult2 = arr.reduce((acc, item) => acc + item, 0);