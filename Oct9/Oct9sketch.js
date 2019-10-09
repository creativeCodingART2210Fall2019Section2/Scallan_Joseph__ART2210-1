/*
let r1, r2, r3, r4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255, 204);
  noStroke();
  r1 = new MRect(1, 134.0, 0.532, 0.1 * height, 10.0, 60.0);
  r2 = new MRect(2, 44.0, 0.166, 0.3 * height, 5.0, 50.0);
  r3 = new MRect(2, 58.0, 0.332, 0.4 * height, 10.0, 35.0);
  r4 = new MRect(1, 120.0, 0.0498, 0.9 * height, 15.0, 60.0);
}

function draw() {
  background(0);

  r1.display();
  r2.display();
  r3.display();
  r4.display();

  r1.move(mouseX - width / 2, mouseY + height * 0.1, 30);
  r2.move((mouseX + width * 0.05) % width, mouseY + height * 0.025, 20);
  r3.move(mouseX / 4, mouseY - height * 0.025, 40);
  r4.move(mouseX - width / 2, height - mouseY, 50);
}

class MRect {
  constructor(iw, ixp, ih, iyp, id, it) {
    this.w = iw; // single bar width
    this.xpos = ixp; // rect xposition
    this.h = ih; // rect height
    this.ypos = iyp; // rect yposition
    this.d = id; // single bar distance
    this.t = it; // number of bars
  }

  move(posX, posY, damping) {
    let dif = this.ypos - posY;
    if (abs(dif) > 1) {
      this.ypos -= dif / damping;
    }
    dif = this.xpos - posX;
    if (abs(dif) > 1) {
      this.xpos -= dif / damping;
    }
  }

  display() {
    for (let i = 0; i < this.t; i++) {
      rect(
        this.xpos + i * (this.d + this.w),
        this.ypos,
        this.w,
        height * this.h
      );
    }
  }
}




let bug; // Declare object

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create object
  bug = new Jitter();
}

function draw() {
  background(50, 89, 100);
  bug.move();
  bug.display();
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}



var x = [];

function setup(){
    createCanvas(240,120);
    noStroke();
    fill(255,200);
    for(var [i] = 0;i<x.length;i++){
        x[i] = random(-1000,200);
    }
}

function draw(){
    background(0);
    for(var i=0;i<3000;i++){
        x[i]+= 0.5;
        var y= i*0.4;
        arc(x[i],y,12,12,0.52,5.76);
    }
}
*/

class Module {
    constructor(xOff, yOff, x, y, speed, unit) {
      this.xOff = xOff;
      this.yOff = yOff;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.unit = unit;
      this.xDir = 1;
      this.yDir = 2000;
    }
  
    // Custom method for updating the variables
    update() {
      this.x = this.x + this.speed * this.xDir;
      if (this.x >= this.unit || this.x <= 0) {
        this.xDir *= -1;
        this.x = this.x + 12 * this.xDir;
        this.y = this.y + 10 * this.yDir;
      }
      if (this.y >= this.unit || this.y <= 0) {
        this.yDir *= -1;
        this.y = this.y + 1 * this.yDir;
      }
    }
  
    // Custom method for drawing the object
    draw() {
      fill(0);
      ellipse(this.xOff + this.x, this.yOff + this.y, 12, 12);
      fill(59,100,100);
      ellipse(this.xDir + this.x, this.yDir + this.y, 20, 20);
    }
  }
  
  let unit = 40;
  let count;
  let mods = [12,2];
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    let wideCount = width / unit;
    let highCount = height / unit;
    count = wideCount * highCount;
  
    let index = 0;
    for (let y = 0; y < highCount; y++) {
      for (let x = 0; x < wideCount; x++) {
        mods[index++] = new Module(
          x * unit,
          y * unit,
          unit / 2,
          unit / 2,
          random(0.05, 0.8),
          unit
        );
      }
    }
  }
  
  function draw() {
    background(356,83,90);
    for (let i = 0; i < count; i++) {
      mods[i].update();
      mods[i].draw();
    }
  }
  