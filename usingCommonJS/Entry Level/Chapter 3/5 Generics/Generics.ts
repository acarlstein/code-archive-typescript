
module Generics{

    function printArg<T>(arg: T) : T {
        console.log("Printing: " + arg);
        return arg;
    }

    console.log(typeof printArg("Hello")); // string
    console.log(typeof printArg(4)); // number
    
    console.log(typeof printArg<string>("hello"));

    // Argument of type '4' is not assignable to parameter of type 'string'.
    //console.log(typeof printArg<string>(4));
    
    //function arrayLength<T>(arg: T) : T {
    //    return arg.length; // Property 'length' does not exist on type 'T'
    //}

    function arrayLength<T>(arg: T[]) : number {
        return arg.length;
    }



    function sortArray<T>(arg: T[]) : T[]{
        return arg.sort(function (a, b){
            if (typeof a === 'string' && typeof b === 'string'){
                return (a.toLocaleUpperCase() < b.toLocaleUpperCase()) ? -1 : 1;
            } else 
            if (typeof a === 'number' && typeof b === 'number'){
                return a - b;
            }            
            return 0;
        });
    }
    
    var stringArray = ["banana", "apples", "manzanas", "zebras", "Alejandro", "Xandra"];
    console.log(stringArray);
    console.log(sortArray(stringArray));

    var numberArray = [7,3,5,8,2,1,4,0,6]
    console.log(numberArray);
    console.log(sortArray(numberArray));

    function sortAndReverse<T>(arg: Array<T>) : Array<T>{
        return arg.sort().reverse();
    }

    console.log(sortAndReverse(stringArray));
    console.log(sortAndReverse(numberArray));

    //////////////////////

    interface IFnSingleArg {
        <T>(arg:T): string;
    }

    function getTypeOf<T>(arg: T) : string {
        return typeof arg;
    }

    var gtf : IFnSingleArg = getTypeOf;

    console.log(gtf(4)); // number
    console.log(gtf("banana")); // string
    console.log(gtf({"x": 1})); // object

    ///////////////////////

    interface IForDumbFn<T>{
        (arg: T) : T;
    }

    function incFn(arg: number) : number {
        return arg + 1;
    }

    var increment : IForDumbFn<number> = incFn;
    console.log(incFn(4)); // 5

    /////////////////////////

    class WeirdCalc<T>{
        zero: T;
        mul: (x: T, y: T) => T;
    }

    var wc = new WeirdCalc<number>();
    wc.zero = 0;
    wc.mul = function(x, y){ return x * y};

    var wcStr = new WeirdCalc<string>();
    wcStr.zero = "zero";
    wcStr.mul = function (x, y) { 
        var str = "";
        for (var i = 0; i < x.length && i < y.length; ++i){
            str += x.charAt(i) + y.charAt(i);
        }
        return str;
    };

    console.log(wc.mul(4,3)); // 12
    console.log(wcStr.mul("Alex", "Xandra")); // AXlaenxd

    ////////////////
    
    interface ILength {
        length: number;
    }

    function len<T extends ILength>(arg:T) : number {
        return arg.length; // No errors while the argument has the property length indicated by the interface
    }

    console.log(len("Alejandro")); // 9

    var objEx = {
        name: "ruler",
        length: 10
    }
    console.log(len(objEx)); // 10

    // Fails because the number 4 doesn't have a length property
    //console.log(len(4));

    ///////////////////////

    function getValue<T, K extends keyof T>(obj: T, key: K){
        return obj[key];
    }

    var map = { 
        "name" : "Alejandro",
        "length" : 4
    }

    console.log(getValue(map, "name")); // Alejandro
    console.log(getValue(map, "length")); // 4

    //////////////////////

    function createObj<T>(classType: {new(): T; }): T {
        return new classType();
    }

    class VINRegistration{
        hasVIN: boolean;
    }

    class TitleRegistration{
        title: string;
    }

    class Vehicle {
        numOfWheels : number;
    }

    class Car extends Vehicle{
        registration: VINRegistration = new VINRegistration();        
        numOfWheels = 4;
        constructor(){
            super();
            this.registration.hasVIN = false;
        }
    }

    class Truck extends Vehicle{
        registration: TitleRegistration = new TitleRegistration();
        numOfWheels = 6;
        constructor(){
            super();
            this.registration.title = "owner";
        }
    }

    function createVehicleInstance<V extends Vehicle>(classType: new () => V): V {
        return new classType();
    }

    console.log("Car numOfWeels: " + createVehicleInstance(Car).numOfWheels);
    console.log("Truck numOfWeels: " + createVehicleInstance(Truck).numOfWheels);

    console.log("Car has Vin: " + createVehicleInstance(Car).registration.hasVIN);
    console.log("Truck title: " + createVehicleInstance(Truck).registration.title);

    // Property 'hasTitle' does not exist on type 'VINRegistration'
    //console.log(createVehicleInstance(Car).registration.hasTitle;

    // Property 'hasVIN' does not exist on type 'TitleRegistration'
    //console.log(createVehicleInstance(Truck).registration.hasVIN);

    ////////////////////////


}
