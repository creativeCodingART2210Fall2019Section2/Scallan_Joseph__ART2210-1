var url = 'http://api.open-notify.org/iss-now.json';

var issX = 0; 
var issY = 0; 

function setup(){
    createCanvas(windowWidth,windowHeight);

    setInterval(askISS, 1000);
}

function askISS() {
    loadJSON(url, gotData, 'jsonp'); 
}


function draw(){
    background(51);
    fill(255);
    textAlign(CENTER);
    fill(255);
    ellipse(200,28,55,55);
}