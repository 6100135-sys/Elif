// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//globals
let cars = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
  for(let c of cars){
    c.display();
  }
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
  constructor(type,x,y,direction,color){
    this.type = type;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.color = color;

    this.xSpeed = direction === 1 ? 2 : -2;

  }

  display(){
    fill(this.c);
    rect(this.x,this.y,this.width,this.height);
    
  }

  move(){

  }

  speedUp(){

  }

  speedDown(){

  }

  changeColor(){

  }

  action(){

  }
  
}
