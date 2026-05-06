class Shapes{
    draw(){
        console.log(`Im drawing a Shape.`);
    }
}
class Square extends Shapes{
    draw(){
         console.log(`Im drawing a Square.`);
    }
}
class Circle extends Shapes{
    draw(){
         console.log(`Im drawing a Circle.`);
    }
}
const shapes = [new Circle(), new Square()];
 
shapes.forEach(shape => shape.draw());
