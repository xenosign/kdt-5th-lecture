function showHeight() {
  console.log(`해당 객체의 키는 ${this.height} 입니다`);
}

const pororo = {
  name: "뽀로로",
  height: 110,
  showHeight,
};

pororo.showName = function () {
  console.log(`해당 객체의 이름은 ${this.name} 입니다`);
}

pororo.showHeight();
pororo.showName();