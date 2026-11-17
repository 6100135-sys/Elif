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
  getAvg();
}

async function loadAssets() {
  chip = await loadImage("/assets/chip.jpg");
}

function getAvg() {
  chip.loadPixels();

  for (let y = 0; y < chip.height; y++) {
    for (let x = 0; x < chip.width; x++) {

      let index = ((y * chip.width) + x) * 4;

      let r = chip.pixels[index];
      let g = chip.pixels[index + 1];
      let b = chip.pixels[index + 2];

      if (r >= g && r >= b) {
        chip.pixels[index] = 255;
        chip.pixels[index + 1] = 0;
        chip.pixels[index + 2] = 0;
      }
      else if (g >= r && g >= b) {
        chip.pixels[index] = 0;
        chip.pixels[index + 1] = 255;
        chip.pixels[index + 2] = 0;
      }
      else {
        chip.pixels[index] = 0;
        chip.pixels[index + 1] = 0;
        chip.pixels[index + 2] = 255;
      }
    }
  }

  chip.updatePixels();
}