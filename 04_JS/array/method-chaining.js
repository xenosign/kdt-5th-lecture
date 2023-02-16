// --> "Hello"
let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-");
console.log(helloTestArr);

let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

let resultStr = reverseHelloTestArr.join("");
console.log(resultStr);

let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

const obj = {
  arr: ['a', 'b', 'c'],
  number: 10,
};

let testStr = obj.str?.reverse().join("");
console.log(testStr);

const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];
const result1 = kdtCurriculum.shift().split("").reverse().join("");
const result2 = kdtCurriculum.pop().split("").reverse().join("");
console.log(result1, result2);