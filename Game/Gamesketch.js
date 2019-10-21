var radius = 20; 
var x =110; 
var y=120;
var speed = 3.5; 
var direction = 2;
var ball = {
    x:300,
    y:200,
    xspeed:4,
    yspeed:3
    

}



function setup(){
  createCanvas(windowWidth,windowHeight);
  ellipseMode(RADIUS);

}

function draw(){
  background(0);
  rect(20,mouseY,15,200);
  rect(1400,mouseY,15,200);
  rect(750,0,14,775);
  fill(255);

  //x
  x+=speed*direction; 
    if((x>width-radius)||(x<radius)){
        direction=-direction;
    }
    if(direction==1){
      ellipse(x,60,radius,radius,1.52,5.76);
    

    }else{
      ellipse(x,120,radius,radius,2.52,4.76);
  
    }
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}