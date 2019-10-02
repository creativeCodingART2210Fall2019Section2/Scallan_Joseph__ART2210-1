let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(windowWidth,windowHeight);
  stroke(255);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;
}

function draw() {

  background(0);
  noStroke();
  colorMode(HSL);
  let c = color(156, 100, 50, 1);
  fill(c);
  let value = lightness(c); // Sets 'value' to 50
  fill(value);



  // Draw the clock background
  noStroke();
  fill(6, 27, 221);
  ellipse(cx, cy, clockDiameter + 200, clockDiameter + 25);
  fill(237, 32, 36);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  //Draw the hands of the clock
  stroke(6,27,221);
  strokeWeight(5);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(10);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(15);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(2) * hoursRadius);

  

  

  // Draw the minute ticks
  strokeWeight();
  fill(6,27,221);
  beginShape(TRIANGLES);
  for (let a = 2; a < 360; a += 12) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x,y); 
  }
  endShape(2);
}