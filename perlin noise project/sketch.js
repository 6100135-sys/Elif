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
  print("a");
  offset = random(1000);
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