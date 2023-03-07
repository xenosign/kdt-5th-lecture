const NUMBER = 10000;
let getGiftNum = 0;
const result = [0, 0];

function montyHall(number, change) {
  for (let i = 0; i < number; i++) {
    const gift = Math.floor(Math.random() * 3);
    const selection = Math.floor(Math.random() * 3);

    console.log(selection, gift);

    if (selection !== gift) {
      if (change === true) {
        result[0]++;
      } else {
        result[1]++;
      }
    } else {
      if (selection === gift) {
        result[1]++;
      } else {
        result[0]++;
      }
    }
  }
  console.log(result);
}

montyHall(NUMBER, false);