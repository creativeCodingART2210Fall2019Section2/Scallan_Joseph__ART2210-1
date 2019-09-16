function setup(){
    createCanvas(windowWidth,windowHeight);
    background(204);

}




function draw(){



    let x1 = map(mouseX, 0, width, 0, 255, true);
    let x2 = map(mouseY, 0, width, 0, 140, true);
    let x3 = map(mouseY, 0, width, 0, 255, true);





}





function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
    //background(204);

}