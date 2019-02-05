module PropertyLimitations{
    
    // Properties do not work on every browser. They do for new browsers.
    // Properties are available since ECMASCript 5 
    // Properties will fail for browsers suck as Internet Explorer (IE) 6, IE 7
    // Properties may or not work on IE 8 but requires to use DOM elements or objects.
    // tsc.exe --target ES5 your_file.ts


    // For previous browsers, we need to change how properties are declared, setted or getter
    class Car {
        private _manufacture: string;

        constructor(manufacture: string){
            this.setManufacture(manufacture);
        }

        getManufacture() : string {
            return this._manufacture;
        }

        setManufacture(value: string){
            if (value === undefined) throw "Manufacture name missing";
            this._manufacture = value;
        }

        print() : void {
            console.log("Manufacture: " + this._manufacture);
        }
    }

    var car = new Car("Suzuki");
    car.print();

}