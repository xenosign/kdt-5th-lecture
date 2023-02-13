function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showInfo = () => {
    console.log(`참여자의 이름은 ${this.name}이고, 성별은 ${this.gender} 입니다`);
  }
}

let user1 = new Kdt('이효석', 'M');
let user2 = new Kdt('tetz', 'M');

user1.showInfo();
user2.showInfo();