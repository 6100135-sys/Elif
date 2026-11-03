// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  //precess objects
  for(let o of objects){
    if(keyIsDown(' ')){
      o.move();
    }

    o.display();
  }
}


class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(0,5),-5)
    this.grav = createVector(0,0.2);
    this.force = createVector(0,0);
  }

  calcmouse(){
    //mouse vector "attractor"calculations
    this.force = createVector(mouseX, mouseY);
    this,this.force.sub(this.pos);
    this.force.normalize(); //sets hyp to 1
    this.force.mult(2); //scales by factor of 2
  }

  move(){
    if(false){
      this.calcmouse(); //update mouse vector
      this.vel.add(this.force);
      this.vel.limit(20);
    }
    else{
      this.vel.add(this.grav);
    }
    this.pos.add(this.vel);
    
    // wall bounce
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *
    }
  }

  displayDensity(){
    //display the ball
    circle(this.pos.x, this.pos.y, 20);

    //diplay the vectors
    if(true){
      stroke(255,0,0);
      line(0,0,this.pos.x, this.pos.y);

      let endx = this.pos.x + this.vel.x;
      let endy = this.pos.y + this.vel.y;

      stroke(0,0,255);
      line(this.pos.x, this.pos.y, endx, endy);

      stroke(0,255,0);
      line(endx, endy, endx+this.force.x,endy+this.force.y);
    }
  }
}