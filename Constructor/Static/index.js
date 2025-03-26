class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('Animal ' + Animal.capitlize(this.name) + ' is walking')
    }

    static capitlize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);

    }
}

A = new Animal("tommy");
A.walk();
// with help of static method we can user class method without creating object foe that