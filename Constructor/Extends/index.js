class Animals {
    constructor(name, color) {
        this.Name = name;
        this.Color = color;
        console.log("constructor calling")
    }

    run() {
        console.log(`${this.Name} is running`)
    }
    shout() {
        console.log(`${this.Name} is Shouting`)

    }
}

class Monkey extends Animals {

    eat() {
        console.log(`${this.Name} is eating Banana`)

    }
}

let Ani = new Animals("Tommy");
Ani.run();
Ani.shout();
let M = new Monkey("Chimpu");
M.shout();
M.eat();
// Ani.eat();