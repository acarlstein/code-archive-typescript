
module Exercise {

    var printFizzBuzz : (x : number) => void = function (x){
        for (var i = 1; i <= x; ++i){
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz");
            } else if (i % 3 == 0) {
                console.log("Fizz");
            } else if (i % 5 == 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
    
    printFizzBuzz(16);

}