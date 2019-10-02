var img;

function preload(){
    img=loadImage("https://github.com/creativeCodingART2210Fall2019Section2/Scallan_Joseph__ART2210-1/raw/master/Game/Unknown%20copy.jpeg");
    
}

function setup(){
        createCanvas(windowWidth,windowHeight);
  
}


function draw(){
  image(img,windowWidth/2-345,windowHeight/2-194);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 

}
