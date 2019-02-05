
// Change "module": "commonjs" to "module": "amd" to not get SCRIPT5009: 'exports' is undefined

import Base = require("./Base");

module ExternalDependencies{
    class ExtBase extends Base {
        constructor(){
            super();
            console.log("ExtBase class object created");
        }
    }

    var extBase = new ExtBase();
}
