module Classes {

    class Vehicle {
        // Fields
        manufacture: string;
        model: string;
        
        // Constructor
        constructor(manufacture: string, model: string){
            this.manufacture = manufacture;
            this.model = model;
        }

        print(){
            console.log(this.manufacture + " " + this.model);
        }

    }

    // When AlternativeVehicle is converted from TypeScript to JavaScript,
    // since we are using the public keyword on the parameters,
    // the manufacture and model field will be created.
    class AlternativeVehicle {
        constructor(public manufacture:string, public model:string) {
        }

        print(){
            console.log(this.manufacture + " " + this.model);
        }
    }


    // Car extends Vehicle. This is called Extending Types
    // Defining Properties, getter and setter
    class Car extends Vehicle{
        
        private _miles: number;

        constructor(manufacture: string, model: string, miles: number){
            super(manufacture, model);
            this._miles = miles
        }

        get miles() : number{
            return this._miles;
        }
        set miles(value: number){
            if (value === undefined) throw 'Miles are missing';
            this._miles = value;
        }
    }

    class Peugeot extends Car {
        constructor(public year : number){
            super("Peugeot", "404", 100000);
        }
    }

    var p = new Peugeot(1980);
    p.print();
    console.log("- Miles: " + p.miles);
    console.log("- Year: " + p.year);

    //Because super calls are redirected to the prototype you cannot use a property and need to use a method i.e. can't use = ()=>. 
}