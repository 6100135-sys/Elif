// Project Title
// elif
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// global var / definitions
let minSize = 5; const maxSize = 200;
let x1; let y1; //diclare first
let x2; let y2;
//for noise()
let noiseTime = 10; let noiseSpeed = 0.01;
// noiseTime -> current coordinate of noise graph
// noiseSpeed -> rate a whitch

async function setup() {
  createCanvas(windowWidth, windowHeight);
  y1 = height/2;
  x1 = width * 0.3;
  x2 = width * 0.7;
  y2 = height / 2;
}

function draw() {
  background(220);
  //randomSeed(0); // use random seed to
                // stabilize random ()
  randomCircle();
  noiseCircle();
  moveCircle();
}

function moveCircle(){
  // chalange:
}

function noiseCircle(){
  //another circle, this time the diameter
  // is generated using noise(), smoothily
  fill(255,50,150);
  let d = noise(noiseTime); // yeild value b/w 0-1
  d = map(d,0,1,minSize,maxSize);
  noiseTime += noiseSpeed;
  circle(x2, y2, d);
}

function randomCircle(){
  // draw a fixed position circle
  // random changing diameter
  fill(50,150,250);
  let d = random(minSize, maxSize);
  circle(x1,y1,d);
}
