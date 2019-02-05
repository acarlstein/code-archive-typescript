
export module Environment {

    /**
     * Ensure we can have the game main loop handle by the browser.
     */
    window.requestAnimationFrame = (function(){
        return  window.requestAnimationFrame       ||
                (<any> window).webkitRequestAnimationFrame ||
                (<any> window).mozRequestAnimationFrame    ||
                (<any> window).oRequestAnimationFrame      ||
                (<any> window).msRequestAnimationFrame     ||
                function(/* function */ callback, /* DOMElement */ element){
                    window.setTimeout(callback, 1000 / 60);
                };
    })();


    

}