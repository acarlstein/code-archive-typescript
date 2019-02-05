module Types {
    
    var data: any;

    var names: string[] = ["Alex", "Carlstein", "Ramos", "Mejia"];

    names[0] = "Alejandro";

    var client: {} = null;

    var num: number;

    var isBoolean: boolean = true;

    var negation = !isBoolean;

    var doubleNegation = !!isBoolean;

    var fullName: string = "Alejandro Carlstein";

    var unknown = undefined;

    var foo = function(arg){ return arg + "!"};

    var bar = foo(10);

    // Using inference
    var anotherBoolean = function() { return 'yes'; };
    var dblNegAnotherBoolean = !!anotherBoolean();

    function LengthOfFirstStrInArray(arr:string[]){
         return [0].length;
    }

    var point = {x: 0, y: 0};

    var point2 = point;
    point2.x = 10;
    point2.y = 20;

    var point3: Object = {x:11, y:12};

    var points: Object[] = [point, point2, point3];

    var sqr = function(x: number){
        return x * x; 
    };

    var bitMulBy2 : Function;
    bitMulBy2 = function (x:number){
        // The operation x << n shifts the value of x left by n bits. 
        // Multiply by 2
        return x << 1;
    };

    var square = {
        side: 10,
        getArea : function(){
            return this.side * this.side;
        },
        getPerimeter: function(){
            return this.side * 4;
        }
    };

    // Don't forget the parentensis, else it will print the actual function code to the console.
    var sqrStr : string = "Square with side of " + square.side 
                          + " has area of " + square.getArea() 
                          + " and perimeter of " + square.getPerimeter();
    console.log(sqrStr);

    // The symbol ? indicate that the parameter its optional.
    var getRectangle = function (rect:{w: number, h?:number}){
        rect.h = (rect.h === undefined) ? rect.w : rect.h;
        return {
            w: rect.w,
            h: rect.h,
            getArea : function(){
                return this.w * this.h;
            },
            getPerimeter : function(){
                return this.w * 2 + this.h * 2;
            },
            getDescription : function(){              
                var str : string = "This rectangle has a width of " + this.w
                                 + " and a height of " + this .h + "." 
                                 + " Its area is " + this.getArea() 
                                 + " and its perimeter is " + this.getPerimeter();
                return str;
            }
        };
    }

    var rect1 = getRectangle({w: 10});
    console.log(rect1.getDescription());

    var rect2 = getRectangle({w: 20, h: 40});
    console.log(rect2.getDescription());



}