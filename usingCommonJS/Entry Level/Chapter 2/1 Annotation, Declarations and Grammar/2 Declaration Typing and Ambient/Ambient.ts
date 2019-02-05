
// Declare variable
declare var foo: number;

// Declare read-only variable
//declare const bar: number = 2;
//error TS1039: Initializers are not allowed in ambient contexts

// ES6 and not "module": "commonjs" in tsconfig.json
//export declare const BAR = 2; 
//console.log("bar: " + BAR);

// Declare variable block-scoped
declare let soo: number;

declare function greet(greeting: string): void;

// By default, lib.d.ts is referenced.
// It contains references for the DOM an JavaScript
declare var document: Document;

// Reference to jquery.d.ts
// You must add jquery prior to run this script.
// Visit http://typescript.codeplex.com/SourceControl/latest#samples/jquery/jquery.d.ts
declare var $;

class Ambient {

    constructor (){
        foo = 1;
        soo = 3;
    }

}

window.onload = function(){
    var ambient = new Ambient();
    console.log("foo: " + foo);
    console.log("soo: " + soo);
    //console.log("bar: " + bar);
    
    // error TS2540: Cannot assign to 'bar' because it is a constant or a read-only property.
    //bar = 4;
        
    // Change browser title to "► Chapter 2.2 - Static vs Dynamic Typing"
    document.title = "\u25ba " + document.title;

    $("#msg").text("This is a message");
}; 