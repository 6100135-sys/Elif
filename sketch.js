// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let objectType = 0;
let startTime = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(221);
  drawShape();
  let elapsed = millis()-startTime;
  if(elapsed > 1000){
    updatestate();
    startTime = millis();
  }
}

function keyPressed(){
 updatestate();
}

function updatestate(){
   objectType++;
  if(objectType > 2){
    objectType = 0;
  }
}

function drawShape(){
  let x = width/2; let y = height/2;
  switch (objectType){
    case 0:
      circle(x,y,150);
      break;
    case 1:
      triangle(x-80,y+50, x+80, y+50, x,y-50);
      break;
    case 2:
      for(let i = 0; i < 30 ; i++ ){
        let x2 = random(x-80, x+80);
        let y2 = random(y-80, y+80);
        line(x,y,x2,y2);
      }
  }
}
