

export namespace View {

    export enum ResizeTo {
        NONE,
        WINDOW
    }

    export class View {

        canvas : HTMLCanvasElement;
        context : CanvasRenderingContext2D;

        constructor(canvasId : string){
            this.canvas = <HTMLCanvasElement> document.getElementById(canvasId);
            this.context = this.canvas.getContext('2d');
        }

        get width() : number {
            return this.canvas.width;
        }

        get height() : number {
            return this.canvas.height;
        }

        set width(size : number){
            this.canvas.width = size;
        }

        set height(size : number){
            this.canvas.height = size;
        }

        autoresize(resizeTo : ResizeTo){
            var self = this;
            switch(resizeTo){
                case ResizeTo.WINDOW:
                    window.addEventListener('resize', function(){
                        self.resize(resizeTo);
                    }, false);
                    break;
                default:
            }
        }

        resize(resizeTo : ResizeTo){
            switch(resizeTo){
                case ResizeTo.WINDOW:
                    this.canvas.width = window.innerWidth;
                    this.canvas.height = window.innerHeight;
                    break;
                default:
            }
        }
    }

}
