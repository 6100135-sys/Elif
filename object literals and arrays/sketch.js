// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ball;
let ballArray = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {//object notation. inside the brackets
          // set up several property: value pairs
    x: 300, y: 400, size: 20,
    c: color(random(225),random(225),random(225)),
    xSpeed: 5, ySpeed: 4
  };
}

function generateBall(x,y){
  // create and return a bal object
  //intitial postion x,y
  let b = {
    x:x, y:y, size:20
    c: color(random(225),random(225),random(225)),
    xSpeed: random(-6,6),
    ySpeed: random(-6,6)
    lifeTime: random(40,60)
  };
  return B;
}

function intobjects(n){
  //create/add n ball objects in out array
  for(let i = 0; i < n; i++)
  ballArray.push(generateBall(mouseX, mouseY));
}

function keypressed(){
  //trigger once per press event
  initobjects(10);
}



function moveBall(B){
  //b -> ball type object
  // update postion and draw the ball

  //update
  //B.x = B.x + B.xSpeed; B.y+=B.ySpeed;

  //walls
  //if(B.x < 0 || B.x > width) B.xSpeed *= -1;
  //if(B.y < 0 || B.y > height) B.ySpeed *= -1;

  //draw
  //fill(B.c);
  //circle(B.x, B.y, B.size);
}

function draw() {
  background(220);
  //loop through an array (traversal)
  for(let i = 0; i<ballArray. length; i++){
    let b = ballArray[i];
    moveBall(b);
    b.lifeTime--;
    if(b.lifeTime < 1){
      //.spice(pos, #ofItemToDel, [add]) delets items f
      ballArray.splice(i, 1);
    }
  }
  //moveBall(ball);
}
