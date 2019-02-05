// Declaring a module explicitly
module ModulesReview{

}

// No module declaration but it is considered a "global module" or "global namespace"
class ThisIsAClass {

}
var thisIsAClass = new ThisIsAClass(); 

////////////////////

interface ICoord {
    x:number;
    y:number;
    z?:number;
}

interface IPoint {
    getCoordinates(): ICoord;
}

class Point implements IPoint {
    constructor (public coordinates:ICoord){
    }
    getCoordinates(){
       return this.coordinates;
    }
}
var point:IPoint = new Point({x: 10, y: 20, z: 19});
console.log(point.getCoordinates());

//////////////////////

// Internal Named Module aka. Namespace
namespace Shapes{
    
    interface ISquare{
        side: number;
    }

    class SqrSprite implements ISquare {
        constructor(public side: number){}
    }

    var wallSprite : ISquare = new SqrSprite(32);
    console.log("wallSprinte side: " + wallSprite.side);
}

// No exposure; therefore, we must export the class as show below
// var mySprite = Shapes. 

namespace Sprites{
    
    interface ISquare{
        side: number;
    }

    // We must add export in order to exposed this class else it would only be accesable inside the module, not outside of it.
    export class Square implements ISquare {
        constructor(public side: number){}
    }
}
var mySprite = new Sprites.Square(16);
console.log("mySprite side: " + mySprite.side);

// We can add a continuation of the previous namespace functionality in this way
namespace Sprites {

    // You can export the interface (to make is accessable) or move it outside the namespace
    export interface IRectangle{
        width: number;
        height: number;
    }

    export class Rect implements IRectangle{
        constructor(public width: number, public height: number){}
    }    
}

var mySquareSprite = new Sprites.Square(64);
console.log("mySquareSprite side: " + mySquareSprite.side);

// This will not work sike the interface ISquare is not outside the namespace
//var mySquareSprite2:ISquare = new Sprites.Square(64);

// This will not work sike the interface ISquare was not exported (aka. exposed)
//var mySquareSprite2:Sprites.ISquare = new Sprites.Square(64);

var myRectSprite:Sprites.IRectangle = new Sprites.Rect(32, 16);
console.log("myRectSprite width: " + myRectSprite.width + " and height: " + myRectSprite.height);

// All namespaces are turn into JavaScript Immediately-Invoke Function Expression (IIFE)
// which looks like this:

(function(){ // Define function and run it right away.
    console.log("IIFE Example");
})(); // The outer parentesis disambiguates the function expression from statement

// This allows to wrap functionality and remove them from the global scope
// This provides the advantage to create privacy, encapsulation and minimize global scope pollution.

