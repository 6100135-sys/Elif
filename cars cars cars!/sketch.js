// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  fill(0);
  rect(0,windowHeight/2-200,windowWidth,400);
  fill("yellow");
  for (let x = 0; x < width; x += 50) {
  rect(x, windowHeight/2-15, 30, 10);
  }
}

class Vehicle{

  
}
