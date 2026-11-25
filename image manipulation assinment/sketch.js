// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let chip;
let race;
let nuit;
let hand;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  nogreen();
  posterize();
  mirror();
}

function draw() {
  background(220);
  image(chip, 0, 0, 200, 200);
  getAvg();

  image(race, 200, 0, 200, 200);

  image(nuit, 400, 0, 200, 200);

  image(hand, 0, 200, 200, 200);
}

async function loadAssets() {
  chip = await loadImage("/assets/chip.jpg");
  race = await loadImage("/assets/race.jpg");
  nuit = await loadImage("/assets/nuit.jpg");
  hand = await loadImage("/assets/hand.jpg");
  
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

function posterize() { 
  nuit.loadPixels();

  for (let y = 0; y < nuit.height; y++) {
    for (let x = 0; x < nuit.width; x++) {

      let index = (x + y * nuit.width) * 4;

      let r = nuit.pixels[index];
      let g = nuit.pixels[index + 1];
      let b = nuit.pixels[index + 2];

      let avg = (r + g + b) / 3;

      if (avg >= 205) {
        nuit.pixels[index] = 170;
        nuit.pixels[index + 1] = 230;
        nuit.pixels[index + 2] = 220;
      }
      else if (avg >= 155) {
        nuit.pixels[index] = 105;
        nuit.pixels[index + 1] = 150;
        nuit.pixels[index + 2] = 210;
      }
      else if (avg >= 105) {
        nuit.pixels[index] = 120;
        nuit.pixels[index + 1] = 180;
        nuit.pixels[index + 2] = 60;
      }
      else if (avg >= 55) {
        nuit.pixels[index] = 130;
        nuit.pixels[index + 1] = 30;
        nuit.pixels[index + 2] = 130;
      }
      else {
        nuit.pixels[index] = 90;
        nuit.pixels[index + 1] = 10;
        nuit.pixels[index + 2] = 50;
      }

    }
  }

  nuit.updatePixels();
}

function mirror() {
  hand.loadPixels();

  for (let y = 0; y < hand.height; y++) {
    for (let x = 0; x < hand.width / 2; x++) {

      let index = (x + y * hand.width) * 4;
      let mirrorX = hand.width - 1 - x;
      let mirrorIndex = (mirrorX + y * hand.width) * 4;

      hand.pixels[index] = hand.pixels[mirrorIndex];
      hand.pixels[index + 1] = hand.pixels[mirrorIndex + 1];
      hand.pixels[index + 2] = hand.pixels[mirrorIndex + 2];

    }
  }

  hand.updatePixels();
}