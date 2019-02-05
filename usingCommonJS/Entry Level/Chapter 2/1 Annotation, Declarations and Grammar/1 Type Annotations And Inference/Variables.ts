class Variables {

    default: number = 50;
    static DEFAULT: number = 100;

    constructor (){
    }

    annotations(){
        // The variable type can be of any type
        var anyType;

        // The variable type is of number type
        var numberType: number;
        
        // The variable type is inference to number due the value type being set
        var aNumber = 2;
        console.log("aNumber is type of: " + typeof aNumber);
        
        // The variable type is inference to number and given a value
        var anotherNumber: number = 2;
        console.log("anotherNumber is type of: " + typeof anotherNumber);

        var aString: string = "Hello";
        console.log("aString is type of: " + typeof aString);
    }

    inferences(){
        var number1 = 1;

        var string1 = number1 + " Potato";

        var number2: number = number1 + 1;

        // Convert number2 to type inference string
        var string2: string = number2 + " Potatos";

        console.log(string1);
        console.log(string2);

    }

    add(n1: number, n2: number){
        return n1 + n2
    }

    // This is a way to reduce bugs
    init : (name: string, description: string) => void = function(name, description){
        this.name = name;
        this.description;
        console.log(this.name + ": " + this.description);
    }
}

window.onload = function(){
    var variables = new Variables();
    console.log("variables type of: " + typeof variables);
    variables.annotations();
    variables.inferences();
    console.log("Add: " + variables.add(variables.default, Variables.DEFAULT));
    
    variables.init("Variables", "Show information");
    
    //The calling below will end in error since it is expecting a second variable to be string type, not number type
    //variables.init("Variables", 1111);
}; 