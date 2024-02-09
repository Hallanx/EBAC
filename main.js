// Criação da classe abstrata
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Método abstrato que será implementado pelas classes herdeiras
    makeSound() {
        throw new Error("Método abstrato deve ser implementado");
    }
}

// Criação de classes herdeiras
class Dog extends Animal {
    makeSound() {
        return "Au au!";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Miau!";
    }
}

// Criação de instâncias de objetos
const myDog = new Dog("Rex");
const myCat = new Cat("Whiskers");
const anotherDog = new Dog("Buddy");

// Criação de objetos
console.log(myDog.makeSound());
console.log(myCat.makeSound());
console.log(anotherDog.makeSound());