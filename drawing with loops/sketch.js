// drawing with single loops
// elif
// 09/25/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function worm(y, size){
  //use this function to draw a line of curcles
  // y -> (number) height at witch to draw line
  // size -> (number) diameter of each circle
  for(let x = size/2; x < width; x += size){
    circle(x,y,size);
  }
}

function gradientBackground(){
  //create a gradeient to use as background
  noStroke();
  let h = 1; //rectangle height
  
  //could use for or while loop here...
  let y = 0;
  while (y < height){
    let mappedY = map(y,0,height,0,225);
    //fill(mappedY);
    fill(mappedY,mouseX/10,225-mappedY);
    rect(0, y, width, h);
    y += h;
  }
  
}

function draw() {
  background(220);
  gradientBackground();
  worm(50, 30);
  worm(height*0.5,20);
}//sreen updated here
