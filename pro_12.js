class Wizard {

    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor; //health라는 이름의 변수가 생기고, 변수값이 집어넣어진다.
    }
    attack() {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();