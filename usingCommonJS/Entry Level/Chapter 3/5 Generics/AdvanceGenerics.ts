module AdvanceGenerics{
    
    function combine<T, U>(first: T, second: U): T & U {
        let result = <T & U>{};
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id];
            }
        }
        return result
    }

    class Vehicle {
        constructor(public manufacture: string, public model: string){}
    }

    class Paint {
        getDefaultColor(){
            return "red"
        }
    }

    var newToyota = combine(new Vehicle("Toyota", "Coraza"), new Paint());
    console.log(newToyota.manufacture);
    console.log(newToyota.model);
    console.log(newToyota.getDefaultColor());

}