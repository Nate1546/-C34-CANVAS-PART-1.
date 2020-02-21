//C34 PAINTING CANVAS
//JS HARRISON


var drawingA=[];
var currentPathA=[];
var akhilisDrawing=false;

var rStroke;
var x,y;
var weight;
var colorfill= [];

function setup(){
    var canvas=createCanvas(400,400);
  //  canvas.mousePressed(startPath);
  //  canvas.mouseReleased(endPath);
}

function mousePressed(){
    startPath();
}

function mouseReleased(){
    endPath();
    return true;
}  
    
function startPath() {
    akhilisDrawing = true;
    drawingA.push(currentPathA);
}
      
function endPath() {
    akhilisDrawing = false;
    return true;
}

function draw(){
    background(100);
    rStroke=floor(map(mouseX,10,400,10,250)); 
    weight=floor(random(1,4));
    colorfill=[mouseX,mouseY,(mouseX+mouseY/2)];
    textSize(20);
    text("Press and Move the mouse ..",50,380);
    //    text("Press Space to see the path...",50,395);
           
    if (x==undefined) {
        x=400;
    }else if(x<0){
        x=0;
    }
    
    if (y>height) {
        y=400;
    }else if(y<0){
        y=0;
    }
   

    
    if (akhilisDrawing) {
        var point = {
          x: mouseX,
          y: mouseY,
          rStroke:rStroke,
          weight:weight,
          colorfill:colorfill
        }
        currentPathA.push(point);
        
        // for (var i = 0; i < currentPathA.length-1; i++) {
        //     strokeWeight(currentPathA[i].weight); 
        //     stroke(currentPathA[i].rStroke,12,14);
        //     fill(currentPathA[i].colorfill);
        //     ellipse(currentPathA[i].x, currentPathA[i].y,7,7);
        // }
        // console.log(point.x,point.y,rStroke,weight);
    }  
     
    // if(keyIsPressed){// To show the path drawn
    //     if(keyCode==32){
    //     for (var i = 0; i < currentPathA.length-1; i++) {
    //         strokeWeight(currentPathA[i].weight); 
    //         stroke(currentPathA[i].rStroke,12,14);
    //         fill(currentPathA[i].colorfill);
    //         rect(currentPathA[i].x, currentPathA[i].y,17,17);
    //         }
    //     }
    // }
    
    if (mouseReleased){
         
        for (var i = 0; i < currentPathA.length-1; i++) {
            strokeWeight(currentPathA[i].weight); 
            stroke(currentPathA[i].rStroke,12,14);
            fill(currentPathA[i].colorfill);
        //      rect(currentPathA[i].x, currentPathA[i].y,17,17);
            ellipse (currentPathA[i].x, currentPathA[i].y,7,7);   
        }
    }

    
}

  