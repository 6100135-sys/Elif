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
  // space
  background(0);
  stroke(255);
  strokeWeight(5);
  point(windowWidth/2,windowHeight/2);
  point(windowWidth/2+100,windowHeight/2+100);
  point(windowWidth/2-100,windowHeight/2-50);
  point(windowWidth/2+200,windowHeight/2-200);
  point(windowWidth/2+50,windowHeight/2-300);
  point(windowWidth/2-250,windowHeight/2-200);
  point(windowWidth/2-251,windowHeight/2+10);

  // the moon
  fill("gray");
  stroke(0);
  strokeWeight(1);
  ellipse(windowWidth/2,windowHeight,1000,500);
  fill(100, 100, 100);
  circle(windowWidth/2,windowHeight,100);
  circle(windowWidth/2+50,windowHeight-150,100);
  circle(windowWidth/2-175,windowHeight-125,100);
  circle(windowWidth/2+250,windowHeight-100,100);
  circle(windowWidth*0+25,windowHeight-25,100);

  // the earth
  fill(0, 0, 100);
  stroke(0);
  strokeWeight(1);
  circle(windowWidth*0+100,windowHeight*0+100,100);
  fill(0, 100, 0);
  noStroke();
  square(windowWidth*0+75,windowHeight*0+100,20);
  square(windowWidth*0+80,windowHeight*0+80,25);
  square(windowWidth*0+120,windowHeight*0+75,15);
  square(windowWidth*0+60,windowHeight*0+90,25);
  square(windowWidth*0+115,windowHeight*0+125,10);

  // the rocket
  fill(225, 0, 0);
  stroke(0);
  strokeWeight(1);
  triangle(mouseX-50,mouseY+50,mouseX,mouseY-50,mouseX+50,mouseY+50);
  fill(225, 225, 225);
  rect(mouseX-45,mouseY+50,90,150);
  if (orangeVisible) {
  fill(225, 118, 0);
  triangle(mouseX-40,mouseY+200,mouseX,mouseY+275,mouseX+40,mouseY+200);
  }
  fill(225, 0, 0);
  triangle(mouseX-45,mouseY+100,mouseX-45,mouseY+200,mouseX-100,mouseY+250);
  triangle(mouseX+45,mouseY+100,mouseX+45,mouseY+200,mouseX+100,mouseY+250);
  fill("lightblue");
  circle(mouseX,mouseY+100,50,50); 

  // my name
  fill(225, 225, 225);
  stroke(0);
  strokeWeight(1); 
  textSize(50)
  text('Eli',0,windowHeight);
  
 
}
//truster function
let orangeVisible = false;

function keyPressed() {
  if (key === ' ') {
    orangeVisible = !orangeVisible;
  }
}
