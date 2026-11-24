// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//let chip;
let race;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  nogreen();
  posterize();
}

function draw() {
  background(220);
  //image(chip, 0, 0, 200, 200);
  //getAvg();

  image(race, 200, 0, 200, 200);
}

async function loadAssets() {
  //chip = await loadImage("/assets/chip.jpg");
  race = await loadImage("/assets/race.jpg");
}

//function getAvg() {
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
//}

function nogreen() {
  createCanvas(race.width, race.height);
  race.loadPixels();

  for (let y = 0; y < race.height; y++) {
    for (let x = 0; x < race.width; x++) {

      let index = (x + y * race.width) * 4;

      if (x >= race.width / 2) {
        race.pixels[index + 1] = 0;
      }

    }
  }

  race.updatePixels();
}

function posterize() { //change all race to nuit
  race.loadPixels();

  for (let y = 0; y < race.height; y++) {
    for (let x = 0; x < race.width; x++) {

      let index = (x + y * race.width) * 4;

      let r = race.pixels[index];
      let g = race.pixels[index + 1];
      let b = race.pixels[index + 2];

      let avg = (r + g + b) / 3;

      if (avg >= 205) {
        race.pixels[index] = 170;
        race.pixels[index + 1] = 230;
        race.pixels[index + 2] = 220;
      }
      else if (avg >= 155) {
        race.pixels[index] = 105;
        race.pixels[index + 1] = 150;
        race.pixels[index + 2] = 210;
      }
      else if (avg >= 105) {
        race.pixels[index] = 120;
        race.pixels[index + 1] = 180;
        race.pixels[index + 2] = 60;
      }
      else if (avg >= 55) {
        race.pixels[index] = 130;
        race.pixels[index + 1] = 30;
        race.pixels[index + 2] = 130;
      }
      else {
        race.pixels[index] = 90;
        race.pixels[index + 1] = 10;
        race.pixels[index + 2] = 50;
      }

    }
  }

  race.updatePixels();
}