let mathScoreStr = prompt("수학 점수를 입력 하세요");
let engScoreStr = prompt("영어 점수를 입력 하세요");

let mathScoreNum = Number(mathScoreStr);
let engScoreNum = Number(engScoreStr);

let avg = (mathScoreNum + engScoreNum) / 2;

console.log(avg);