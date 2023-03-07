const arr = [1, 2, 3, "노래"];

const fs = require('fs');

const obj = {
  data: arr,
}

const json = JSON.stringify(obj);
const addVar = 'data = ' + json;
fs.writeFileSync('data.json', addVar);