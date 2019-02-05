class Car {
    engine: string;
    
    constructor (newEngine: string){
        this.engine = newEngine;
    }
    
    start(){
        console.log("Car engine, " + this.engine + ", started!");
    }

    stop(){
        console.log("Car engine, " + this.engine + ", stopped!");
    }
}

window.onload = function(){
    var carV4 = new Car("V4");
    carV4.start();
    carV4.stop();

    var carV6 = new Car("V6");
    carV6.start();
    carV6.stop();

    var carV8 = new Car("V8");
    carV8.start();
    carV8.stop();
};