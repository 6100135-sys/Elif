// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectwdth = 10;
let xTime = 5;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //TEMPORTARY
  // keep until panning feature
  // no loops causes loop()

}

function keyPressed() {
  if (keyCode === 37) {
    print("a");
    rectwdth = max(1, rectwdth - 1);
  }
  if (keyCode === 39) {
    rectwdth += 1;
  }
   if (key === ' '){
     rectwdth = 10;
   }

  background(220);
  generateTerrain();
}


function draw() {
  background(220);
  generateTerrain();

}


function generateTerrain() {
  fill(0);
  for (let x = 0; x < width; x += rectwdth) {
    let h = noise(xTime) * height;
    xTime += 0.01;
    rect(x, height, rectwdth, -h);
  }
}

function drawFlag(x,y){
  line();
  triangle();

}