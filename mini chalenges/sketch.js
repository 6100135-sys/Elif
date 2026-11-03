// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(windowWidth/2,windowHeight/2);
  circle(0,0,500);
  for(let i = 0; i <= 360; i+=6){
  push();
  rotate(i);
  fill(0);
  rect(185,0,50,5);
  pop();
  }
  for(let i = 30; i <= 360; i+=30){
  push();
  rotate(i);
  fill(0);
  rect(165,0,70,15);
  pop();
  }

}
