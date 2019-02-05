module Interfaces{

    // Interface
    interface RectAreaInterface {
        (w: number, h: number) : number;
    };

    // Using the RectAreaInterface ensure the function has the right number (and type)
    // of parameters and the correct type of return.
    var rectArea : RectAreaInterface = (width: number, height: number) => width * height;
    console.log("Area 1: " + rectArea(10, 10));

    
    // The below code will fail when trying to use rectArea2 since it is expecting two parameters instead of one
    //var rectArea2 : RectAreaInterface = (side: number) => side * side;
    
    // error TS2554: Expected 2 arguments, but got 1.
    //console.log("Area 2: " + rectArea2(20));


    // We can ensure that the correct data is pass 
    interface ICoordinates {
        x: number;
        y: number; 
        z?: number; // Optional
    }

    // Function that return no value
    var printCoordinates : (coord: ICoordinates) => void;
    printCoordinates = function (coord){
        console.log("x: " + coord.x + ", y: " + coord.y + ", z?: " + coord.z);
    }
    
    printCoordinates ({x: 10, y: 10});
    printCoordinates ({x: 20, y: 20, z: 20});

    // error TS2345: Argument of type '{ a: number; b: number; }' is not assignable to parameter of type 'ICoordinates'.
    // Object literal may only specify known properties, and 'a' does not exist in type 'ICoordinates'.
    //printCoordinates ({a: 10, b: 10});
    
    // error TS2345: Argument of type '{ x: string; y: string; }' is not assignable to parameter of type 'ICoordinates'.
    // Types of property 'x' are incompatible.
    // Type 'string' is not assignable to type 'number'.
    //printCoordinates({x: "a", y: "b"});

    // A point can be 2D or 3D
    interface Point {
        x: number,
        y: number,
        z?: number
    }

    var printPoint : (point: Point) => void = function(point){
        var str = "x: " + point.x
                + ", y: " + point.y
                + ", z: " + (point.z || 0);
        console.log(str);
    };

    var point2D : Point = {x: 10, y: 20};
    printPoint(point2D);

    var point3D : Point = {x: 30, y: 40, z: 50};
    printPoint(point3D);

    // Interfaces can allow for polymorphic behavior

    interface Vehicle {
        manufacture: string;
        model: string;
        miles: number;
        print: () => void;
    } 
             
    // car must fulfill the requirements of the interface Vehicle
    var car : Vehicle = {
        manufacture: 'Toyota',
        model: 'Corrola',
        miles: 100000,
        print: function(){
            var str = this.manufacture + ", " 
                    + this.model + " with " 
                    + this.miles + " miles."
            console.log(str);
        }
    };

    car.print();
    
    // 2 or more interfaces

    interface NumberExtras {
        withCommas: () => string;
    }

    interface ExtendedVehicle extends Vehicle, NumberExtras{}

    var truck : ExtendedVehicle = {
        manufacture: 'Jeep',
        model: 'Terrain',
        miles: 145230,
        print: function(){
            var str = this.manufacture + ", " 
                    + this.model + " with " 
                    + this.withCommas() + " miles."
            console.log(str);
        },
        withCommas: function(){
            return this.miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    };

    truck.print();

    // The return object must match the interface Vehicle.
    // In this case, we hide the function withCommas 
    function getAirplane() : Vehicle {
        var manufacture: string = 'Airplane';
        var model: string = 'B52';
        var miles : number = 555320;
        var print = () => {
            var str = manufacture + ", " 
                    + model + " with " 
                    + withCommas() + " miles."
            console.log(str);
        };
        var withCommas = function () {
            return miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return {
            manufacture: manufacture,
            model: model,
            miles: miles,
            print: print
        };
    }    

    var airplane = getAirplane();
    airplane.print(); 
    
    ////
    interface IOnOff {
        on(callback: (status: boolean, deviceType: string) => void) : void;
        off(callback: (status: boolean, deviceType: string) => void) : void;
    }

    function deviceOn(status: boolean, deviceType: string){
        if (status === true){
            console.log("The device " + deviceType + " is already on");
            return;
        }
        console.log("The device " + deviceType + " is " + (status ? "on" : "off") + ". We will turn it on");
    }


    function deviceOff(status: boolean, deviceType: string){
        if (status === false){
            console.log("The device " + deviceType + " is already off");
            return;
        }
        console.log("The device " + deviceType + " is " + (status ? "on" : "off") + ". We will turn it off");
    }

    class Lamp implements IOnOff {
        private status : boolean = false;
        private type : string = "Lamp";
        constructor(){
            console.log("Lamp");
        }
        
        on(func){
            func(this.status, this.type);
            this.status = true;
        }
        
        off(func){
            func(this.status, this.type);
            this.status = false;
        }
    }

    var lamp = new Lamp();
    lamp.on(deviceOn);
    lamp.off(deviceOff);


}




