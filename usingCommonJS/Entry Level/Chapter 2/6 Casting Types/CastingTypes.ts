module CastingTypes {
    console.log("CastingTypes");

    // Casting (converting) between types

    class Vehicle {
        constructor(public number:number){
            console.log("Class Vehicle: " + number);
        }
    }

    class Car extends Vehicle{
        constructor(public number:number){
            super(number);
            console.log("Class Car: " + number);
        }
    }

    var vehicle = new Vehicle(1);
    var car = new Car(1);

    var vehicle2 : Vehicle = new Vehicle(2);
    var car2 : Car = new Car(2);

    var vehicle3 : Vehicle = new Car(3); 
    console.log("vehicle3 instance of Vehicle? " + (vehicle3 instanceof Vehicle));
    console.log("vehicle3 instance of Car? " + (vehicle3 instanceof Car));
    console.log("vehicle3 type of Vehicle? " + (typeof vehicle3));
    console.log("vehicle3 type of Car? " + (typeof vehicle3));

    var car3 : Car = new Vehicle(3);
    console.log("car3 instance of Vehicle? " + (car3 instanceof Vehicle));
    console.log("car3 instance of Car? " + (car3 instanceof Car));
    console.log("car3 type of Vehicle? " + (typeof car3));
    console.log("car3 type of Car? " + (typeof car3));

    var vehicle4 : Vehicle = <Vehicle> new Car(4);  // Up cast
    console.log("vehicle4 instance of Vehicle? " + (vehicle4 instanceof Vehicle));
    console.log("vehicle4 instance of Car? " + (vehicle4 instanceof Car));
    console.log("vehicle4 type of Vehicle? " + (typeof vehicle4));
    console.log("vehicle4 type of Car? " + (typeof vehicle4));

    var car4 : Car = <Car> new Vehicle(4); // Down cast
    console.log("car4 instance of Vehicle? " + (car4 instanceof Vehicle));
    console.log("car4 instance of Car? " + (car4 instanceof Car));
    console.log("car4 type of Vehicle? " + (typeof car4));
    console.log("car4 type of Car? " + (typeof car4));

    // Invalid cast
    //var number = <number> "string";

    // You need Type Definition file (*.d.ts file) for this to work correctly
    // Plus, additional Type Definition (Third Party) scripts:
    // - Repository for high quality TypeScript type definitions - http://definitelytyped.org/
    // - DefinitelyTyped at GitHub : https://github.com/DefinitelyTyped/DefinitelyTyped

    // This should fail (if you have everything set up correctly)
    // It should fail because the method createElement return HTMLElement type
    //var table : HTMLTableElement = document.createElement("table");

    // This will pass because you casted from HTMLElement to HTMLTableElement
    var table : HTMLTableElement = <HTMLTableElement> document.createElement("table");

    class Concatenator{
        private input1 : HTMLInputElement;
        private input2 : HTMLInputElement;
        private result : HTMLSpanElement;

        constructor(input1Id : string, input2Id: string, resultId: string){
            this.input1 = <HTMLInputElement> document.getElementById(input1Id);
            this.input2 = <HTMLInputElement> document.getElementById(input2Id);
            this.result = <HTMLSpanElement> document.getElementById(resultId);
            this.setupEvent();
        }

        setupEvent(){
            var button : HTMLButtonElement = <HTMLButtonElement> document.getElementById("btn");
            button.addEventListener('click', event => {
                this.result.innerHTML = this.input1.value + this.input2.value;
            });
        }
    }
    
    // Need to load all DOMs prior to run
    window.onload = function (event){
        var concat = new Concatenator("input1", "input2", "result");
    }
   
}