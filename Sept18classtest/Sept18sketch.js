
var x=0;
var y=0;
var px=0;
var py=0;
var easing =0.15;

function setup(){
    createCanvas(2000,1000)
    stroke(0,302);
}

function draw(){
    var targetX=mouseX;
    x+=(targetX-x)*easing;
    var targetY = mouseY;
    y+=(targetY-y)*easing;
    var weight=dist(x,y,px,py);
    strokeWeight(weight);
    ellipse(x,y,px,py);
    fill(255,20,0);
    fill(255,204,0)
    py=y;
    px=x;
}

function windowResized(){
    drawCanvas(windowWidth,windowHeight)

}

