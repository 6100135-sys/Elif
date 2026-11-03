// Cars! cars! cars!
// Elif
// 10/26/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//globals
let eastbound = [];
let westbound = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create 20 eastbound vehicles
  for (let i = 0; i < 20; i++) {
    let type = floor(random(2));
    let x = random(width);
    // Eastbound lane
    let y = random(windowHeight / 2 - 150, windowHeight / 2 - 40);
    let color = random(["red","blue","green","orange","purple"]);
    let xSpeed = random(1, 5);
    eastbound.push(
      new Vehicle(type, x, y, 1, color, xSpeed)
    );
  }

  // Create 20 westbound vehicles
  for (let i = 0; i < 20; i++) {
    let type = floor(random(2));
    let x = random(width);
    // Westbound lane
    let y = random(windowHeight / 2 + 40, windowHeight / 2 + 150);
    let color = random(["red","blue","green","orange","purple"]);
    let xSpeed = -random(1, 5);
    westbound.push(
      new Vehicle(type, x, y, 0, color, xSpeed)
    );
  }
}


function draw() {
  background(220);
  drawRoad();
  // Drive eastbound vehicles
  for (let c of eastbound) {
    c.action();
  }
  // Drive westbound vehicles
  for (let c of westbound) {
    c.action();
  }
}


function drawRoad() {
  fill(0);
  rect(0,windowHeight / 2 - 200,windowWidth,400);
  fill("yellow");
  for (let x = 0; x < width; x += 50) {
    rect(x,windowHeight / 2 - 15,30,10);
  }
}


class Vehicle {
  constructor(type, x, y, direction, color, xSpeed) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.color = color;
    this.xSpeed = xSpeed;
  }

  display() {
    // CAR
    if (this.type == 0) {
      fill(this.color);
      // Main body
      rect(this.x, this.y, 60, 25);
      // Top
      rect(this.x + 10, this.y - 15, 35, 15);
      // Wheels
      fill("black");
      circle(this.x + 12,this.y + 25,12);
      circle(this.x + 48,this.y + 25,12);
    }

    // TRUCK / VAN
    else {
      fill(this.color);
      // Main body
      rect(this.x, this.y, 80, 35);
      // Cab
      rect(this.x + 50,this.y - 15,30,25);
      // Wheels
      fill("black");
      circle(this.x + 15,this.y + 35,14);
      circle(this.x + 65,this.y + 35,14);
    }
  }

  move() {
    this.x += this.xSpeed;
    // Eastbound = moving right
    if (this.direction == 1) {
      if (this.x > width) {
        this.x = -80;
      }
    }
    // Westbound = moving left
    if (this.direction == 0) {
      if (this.x < -80) {
        this.x = width;
      }
    }
  }

  speedUp() {
    // Eastbound
    if (this.direction == 1) {
      this.xSpeed += 0.1;
      if (this.xSpeed > 15) {
        this.xSpeed = 15;
      }
    }
    // Westbound
    else {
      this.xSpeed -= 0.1;
      if (this.xSpeed < -15) {
        this.xSpeed = -15;
      }
    }
  }

  speedDown() {
    // Eastbound
    if (this.direction == 1) {
      this.xSpeed -= 0.1;
      if (this.xSpeed < 0) {
        this.xSpeed = 0;
      }
    }
    // Westbound
    else {
      this.xSpeed += 0.1;
      if (this.xSpeed > 0) {
        this.xSpeed = 0;
      }
    }
  }

  changeColor() {
    this.color = random(["red","blue","green","orange","purple","pink","white"]);
  }

  action() {
    // Move every frame
    this.move();

    // 1% chance to speed up
    if (random(100) < 1) {
      this.speedUp();
    }

    // 1% chance to slow down
    if (random(100) < 1) {
      this.speedDown();
    }

    // 1% chance to change color
    if (random(100) < 1) {
      this.changeColor();
    }

    // Display every frame
    this.display();
  }
}