function setup (){

    createCanvas(windowWidth, windowHeight);

}


function draw() {

    if(mouseIsPressed) {
        fill();
        } 
        else{
        fill(255, 284, 0);
        }
        

        ellipse(mouseX,mouseY,80,80);

}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
