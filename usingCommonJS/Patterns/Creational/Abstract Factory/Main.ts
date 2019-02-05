/// <reference path="../../../Assets/Collections.ts" />
/// <reference path="../../../Assets/Nodes.ts" />

module Patterns.Creational {

    /**
     * Common interface for all objects.
     * Each "family" of vehicles will have these components.
     */
    export interface IEngine {
        cylinders : number;                  
        start() : void;
        stop() : void;
    }

    export interface ITires {
        psi : number;
        quantity : number;        
    }
    
    /**
     * Implement engines for motorcycles, cars and trucks
     */
    class MotorcycleEngine implements IEngine {
        cylinders = 2;

        start() {
            console.log("Motorcycle engine starts.");  
        }

        stop() {
            console.log("Motorcycle engine stops.");  
        }
    }

    class CarEngine implements IEngine {
        cylinders = 4;
        
        start() {
            console.log("Car engine starts.");  
        }

        stop() {
            console.log("Car engine stops.");  
        }
    }

    class TruckEngine implements IEngine {
        cylinders = 8;
        
        start() {
            console.log("Truck engine starts.");  
        }

        stop() {
            console.log("Truck engine stops.");  
        }
    }

    /**
     * Implement tires for motorcycles, cars, and trucks
     */
    class MotorcycleTires implements ITires{
        psi = 36;
        quantity = 2;
    }

    class CarTires implements ITires{
        psi = 33;
        quantity = 4;
    }

    class TruckTires implements ITires{
        psi = 40;
        quantity = 10;
    }

    /**
     * Let's make it more clean by creating a enum that can be used by our vehicle factory
     */
    enum VehicleType {
        MOTORCYCLE = "motorcycle",
        CAR = "car",
        MONSTER_CAR = "monsterCar",
        TRUCk = "truck"
    }

    /**
     * Abstract factory which client will used to obtain objects.
     * We are assume that we can only provide the same motorcycle, car, monster car, and truck.
     * Yes. You read correctly... Monster Car... We are that awesome.
     */
    abstract class VehicleFactory {
        
        private static motorcycleFactory : VehicleFactory = null;
        private static carFactory : VehicleFactory = null;
        private static monsterCarFactory : VehicleFactory = null;
        private static truckFactory : VehicleFactory = null;

        public abstract typeOfVehicle : string;
        public abstract getEngine() : IEngine;
        public abstract getTires() : ITires;

        public static getFactory(vehicleType : VehicleType) : VehicleFactory {
            let factory : VehicleFactory = null;
            switch(vehicleType){
                case "motorcycle":
                    if (this.motorcycleFactory == null){
                        this.motorcycleFactory = new MotorcycleFactory();
                    }
                    factory = this.motorcycleFactory;
                    break;
                case "car":
                    if (this.carFactory == null){
                        this.carFactory = new CarFactory();
                    }
                    factory = this.carFactory;
                    break;     
                case "monsterCar":
                    if (this.monsterCarFactory == null){
                        this.monsterCarFactory = new MonsterCarFactory();
                    }
                    factory = this.monsterCarFactory;
                    break;     
                case "monsterCar":
                    if (this.truckFactory == null){
                        this.truckFactory = new TruckFactory();
                    }
                    factory = this.truckFactory;
                    break;     
                default:
                    throw new Error("The factory cannot provide the vehicle: " + vehicleType);                  
            }
            return factory;
        }

    }

    /**
     * 
     */
    class MotorcycleFactory extends VehicleFactory {
        typeOfVehicle = "Motorcycle";
        
        getEngine() : IEngine {
            return new MotorcycleEngine();
        }

        getTires() : ITires {
            return new MotorcycleTires();
        }
    }

    class CarFactory extends VehicleFactory {
        typeOfVehicle = "Car";

        getEngine() : IEngine {
            return new CarEngine();
        }

        getTires() : ITires {
            return new CarTires();
        }
    }

    class MonsterCarFactory extends VehicleFactory {
        typeOfVehicle = "Monster Car";
        
        getEngine() : IEngine {
            return new TruckEngine();
        }

        getTires() : ITires {
            return new CarTires();
        }
    }

    class TruckFactory extends VehicleFactory {
        typeOfVehicle = "Truck";

        getEngine() : IEngine {
            return new TruckEngine();
        }

        getTires() : ITires {
            return new TruckTires();
        }
    }

    /**
     * Client code using the Abstract Factory
     */

     try{

        let vehicle = VehicleFactory.getFactory(VehicleType.MONSTER_CAR);
        
        let typeOfVehicle = vehicle.typeOfVehicle;
        console.log("The vehicle is a ".concat(typeOfVehicle));

        let engine : IEngine = vehicle.getEngine();
        engine.start();
        engine.stop();

        let tires : ITires = vehicle.getTires();
        console.log("PSI: ".concat(tires.psi.toString()));
        console.log("Quantity: ".concat(tires.quantity.toString()));

         
     }catch(e){
        console.log("Invalid vehicle: ".concat(e.toString()));
     }
    
}