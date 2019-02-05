/// <reference path="ClassA.ts" />
/// <reference path="ClassB.ts" />
// Above, we are telling the compile (and the IDE) to take in consideration the content of these files

import A = MyClasses.A;
import B = MyClasses.B;

namespace ResultAB {
     var a = new A(10);
     var b = new B(20);
     console.log("a.x: " + a.x);
     console.log("b.y: " + b.y);
}

// While the code below will compile and generate the right JavaScript, 
// it will fail when running on the browser if you don't load ClassA and Class B prior to ResultAB
//   <script type="text/javascript" src="ClassA.js"></script>
//   <script type="text/javascript" src="ClassB.js"></script>
//   <script type="text/javascript" src="ResultAB.js"></script>