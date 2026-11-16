// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let chip;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  
}

function draw() {
  background(220);
  image(chip, 0, 0, 200, 200);
}

async function loadAssets() {
  chip = await loadImage("/assets/chip.jpg");
}

