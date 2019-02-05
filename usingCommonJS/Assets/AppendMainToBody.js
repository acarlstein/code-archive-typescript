function appendPreToBody(text){
    var preElement = document.createElement("PRE");
    if (typeof hljs !== "undefined"){ // If highlightjs library is present
        var codeElement = document.createElement("code"); 
        codeElement.className = "typescript";        
        var textNode = document.createTextNode(text);
        codeElement.appendChild(textNode);        
        preElement.appendChild(codeElement);
        hljs.highlightBlock(preElement);
                    
    }else{        
        var textNode = document.createTextNode(text);
        preElement.appendChild(textNode);
    }
    if(document.body != null){ 
        document.body.appendChild(preElement); 
    }
}

(function() {
    //hljs.initHighlightingOnLoad();

    fetch('Main.ts')
    .then(response => response.text())
    .then(text => appendPreToBody(text));           
})();




function drawLine(canvas, x, y, x2, y2){    
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function getAngleX (x, angle) {
    return x += (angle * Math.cos(Math.PI/6));          
}
function getAngleY(y, angle) {
    return  y += (angle * Math.sin(Math.PI/6));
}

function drawCircleWithText(canvas, x, y, radius, text){

    var ctx = canvas.getContext('2d');
    var radius = 20;

    var circleX = x;
    var circleY = y;

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "black"; // font color to write the text with   
    var font = "bold " + radius + "px serif";
    ctx.font = font;  
    var textWidth = ctx.measureText(text).width;
    var textWeight = ctx.measureText("x").width;
    ctx.fillText(text, circleX - (textWidth / 2), circleY + (textWeight / 2)); 
}