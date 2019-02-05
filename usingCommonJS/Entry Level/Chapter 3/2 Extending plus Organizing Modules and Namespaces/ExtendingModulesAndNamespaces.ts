

interface IPosition {
    x: number;
    y: number;
}

module Sprites.Tools.Shapes{
      

    export interface IShape extends IPosition {}

    export interface ISquare extends IShape {
        side: number;
    }

    export class Square implements ISquare{
        constructor(public x: number, public y: number, public side: number){}
    }

}

module Sprites.Tools.Transformation {

    // We can use import to create a shortcut
    import Tools = Sprites.Tools.Shapes;

    // Here we use the full route to the interface, then we use the shortcut to point out the difference
    export var applyRotation:(shape: Sprites.Tools.Shapes.IShape, angle: number) => Tools.IShape = function(shape, angle) {
        shape.x = shape.x * Math.cos(angle) - shape.y * Math.sin(angle);
        shape.y = shape.y * Math.cos(angle) + shape.x * Math.sin(angle);
        return shape;
    }
    
}

// Without shortcut
var sqrSprite  = new Sprites.Tools.Shapes.Square(50, 50, 10);
console.log("sqrSprite. x: " + sqrSprite.x + ", y: " + sqrSprite.y + ", side: " + sqrSprite.side);

// With shortcut
import SpriteTools = Sprites.Tools.Shapes;

// Remember to cast from interface IShape to interface ISquare since IShape doesn't have the property 'side'
sqrSprite = <SpriteTools.ISquare> Sprites.Tools.Transformation.applyRotation(sqrSprite, 30);
console.log("sqrSprite with 30 degree angle. x: " + sqrSprite.x + ", y: " + sqrSprite.y + ", side: " + sqrSprite.side);