function setup(){

    createCanvas(windowWidth,windowHeight);

}


function draw(){

    ellipse(windowWidth/3, windowHeight/2, 100, 55);
    
    triangle(windowWidth/3, windowHeight/2, windowHeight/2, 20, 86, 75);

    
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);


}
  