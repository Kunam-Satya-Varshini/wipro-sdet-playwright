class Vehicle{
    constructor(name){
        this.name = name;
    }
    sound(){
        console.log(`${this.name} makes a sound.`);
    }
}
const b = new Vehicle("bike");
const c = new Vehicle("car");
b.sound();
c.sound();