class Animal{
    constructor(name){
        this.name=name;
    }
    eats(){
        console.log(`${this.name} is eating.`);
    }
}
class Dog extends Animal{
    constructor(name,sound){
        super(name);
        this.sound=sound;
    }
    eats(){
        super.eats();
        console.log(`${this.name} is ${this.sound}`);
    }
}
const a = new Animal("Dog");
const s = new Dog("Dog","barking");
a.eats();
s.eats();