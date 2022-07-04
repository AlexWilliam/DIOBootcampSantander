class Cat extends Animal {
    constructor(){
        super('cat');
    }

    makeSound(){
        super.makeSound();
        console.log("Meow!");
    }
}

let b = new Cat();
console.log(b.type);