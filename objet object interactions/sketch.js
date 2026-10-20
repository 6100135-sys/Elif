// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//globals
let nodes = [];
let reach = 150;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  //background(220);
  background(0,20);
  //if no deletions, loop by item
  for(let n of nodes){
    n.move();
    n.connect(nodes);
    n.display();
  }
}

function mousePressed(){
  if(mouseButton.left){
    nodes.push(new csNode(mouseX, mouseY));
  }
  else if(mouseButton.center){
    for(let i = 0; i <30; i++){
      nodes.push(new csNode(mouseX, mouseY));
    }
  }
}

class csNode{
  //1. constructor
  constructor(x,y){
    this.x = x;  this.y = y; this.size = 5;
    this.c = color(random(225),random(225),random(225));

    //properties related to movement (perlin nois)
    this.xTime = random(100); this.yTime = random(100);
    this.timeShift = 0.01; this.maxSpeed = 5;

  }

  //2. class methods
  display(){
    //render object cisuallyon the screen
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move(){
    //use perlin nouse for x,y movement
    let xSpeed = noise(this.xTime); //0-1
    xSpeed = map(xSpeed,0,1, this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x > width) this.x = 0;
    else if (this.x < 0) this.x = width;

    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed,0,1,-this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if(this.y > height) this.y = 0;
    else if (this.y < 0) this.y = height;
  }

  connect(nodeArray){
    stroke(this.c);
    for(let n of nodeArray){
      if(n !== this){
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach){
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }
}
