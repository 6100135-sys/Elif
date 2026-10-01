// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// global varibles
let xTime = 5; let xSpeed = 0.01;
let xStart = xTime;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function draw() {
  background(220);
  xTime = xStart;
  xStart += xSpeed;
  tower();
}

function tower(){
  // create a tower woth circles of differnt
  // y pstion. x postion will be
  //randomly seleted.
  let x = 400;
  for(let y = 0; y < height; y += 20){
    let x = noise(xTime); //0-1
    x = map(x, 0, 1, 0, width);
    xTime += xSpeed;

    circle(x,y,20);
  }
}
