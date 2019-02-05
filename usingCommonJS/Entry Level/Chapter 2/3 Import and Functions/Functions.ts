module Functions{
    console.log("Functions()");


    // getArea and getArea2 are both functions that do the same.
    var getArea = function(width: number, height: number){
        return width * height;
    };

    // The arrow function allows for a compact return statement.
    var getArea2 = (width: number, height: number) => width * height;

    // Function that return no value
    var print : (str: string) => void;
    print = function (str){
        console.log(str);
    }
    print ("Hi");

    var print2 : (str: string) => void = function (str){
        console.log(str);
    }
    print2("Hi2");

    var print3 : (str? : string) => void = function(str){
        console.log((str || "No string provided"));
    }
    print3("Hi3");
    print3("");


}