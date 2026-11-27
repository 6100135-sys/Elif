// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let scale = 15;
let branchAngle = 30;

function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(225);
  branchAngle = map(mouseX, 0, width, 5, 60);
  drawTree(width/2, height*.9, 90, 6);
}

function drawLine( x1,  y1,  x2,  y2,  depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2,);
  
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale);     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale);     //using trig ratios. Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth);
    drawLeaf(x2, y2, depth);

    //for a 2-branch tree:
    drawTree(x2, y2, angle-branchAngle, depth-1);
    drawTree(x2, y2, angle+branchAngle, depth-1);
    drawTree(x2, y2, angle+0, depth-1);
  }
}

function drawLeaf(x2, y2,depth){
  if (depth === 4){
    fill(random(255), random(255), random(255));
    circle(x2, y2, random(40));
  }
  else if (depth === 3){
    fill(random(255), random(255), random(255));
    circle(x2, y2, random(30));
  }
  else if (depth === 2){
    fill(random(255), random(255), random(255));
    circle(x2, y2, random(20));
  }
  else if (depth === 1){
    fill(random(255), random(255), random(255));
    circle(x2, y2, random(10));
  }
}
