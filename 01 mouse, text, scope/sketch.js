// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global varibles //
let x = 100; let y = 100;
let c = "green";

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(40);
  updateSquare();
}

function mouseReport(){
  fill("black");
  let mouseInfo = mouseIsPressed + " "
                  + mouseButton.left + " "
                  + mouseButton.center + " "
                  + mouseButton.right;
  text(mouseInfo, mouseX, mouseY);
}

function updateSquare(){
  if(keyCode===40 && keyIsPressed){
    y+=2;
  }
  if(keyIsDown(LEFT_ARROW)){
    x -= 5;
  }
  if(keyIsDown)

  fill(c);
  square(x,y,50);
}

function keyPressed(){
  print(key + " " + keyCode);
  if(key==="a"){
    c = "red";
  }
  else if(keyCode===32){
    c = "yellow";
  }
  else if(keyCode===40){
    y += 10;
  }
}
