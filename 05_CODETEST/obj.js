const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const resultObj = Object.assign(obj1, obj2);

console.log('obj1', obj1);
console.log('obj2', obj2);
console.log('resultObj', resultObj);
resultObj.a = 10;
console.log(obj1);

const tetzObj = {
  name: "이효석",
  age: "39",
  brain: null,
};

// const name = tetzObj.name;
// const age = tetzObj.age;
const { name: tetzName, age, brain, girlFriend = "없음" } = tetzObj;
console.log(tetzName, age, brain, girlFriend);