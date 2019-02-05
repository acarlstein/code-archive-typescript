// If you obtain error TS2307: Cannot find module 'knockout'. It means that you must use npm or copy the td.ts for knockout 
import * as ko from "knockout";

module Declare {

    var name = ko.observable("Alejandro");
    var id = ko.observable(1);
    var dude = {
        id: id,
        name: name
    }; 

    // Remember that dude is an observable object.
    // To access to name, you use the function definition for the observable
    var value : string = dude.name();
    console.log("value: " + value);

    var value2 : any = dude.name;
    console.log("value2: " + value2);

}