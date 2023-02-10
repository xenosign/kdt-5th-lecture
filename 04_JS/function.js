// function helloFunc() {
//   console.log('Hello');
// }

// function returnFunc() {
//   console.log('Return');
//   return 'return';
// }
// let str = helloFunc();
// console.log(str);
// let noNameFunc = function () {
//   console.log('No Name');
//   return 'no name';
// }
// let str2 = noNameFunc();
// console.log(str2);

function sayHello(name = 'friend') {
  console.log(`Hello~ ${name}`);
}

sayHello('Mike');
sayHello();

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(10, 20));

// function square(num) {
//   return num ** 2;
// }

// console.log(square(37));