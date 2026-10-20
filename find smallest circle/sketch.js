// Find the Smallest Circle
// Mr. Scott
// October 5, 2026
 
const NUM_CIRCLES = 100;
let seed;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}
function drawCircles(){
  //draw NUM_CIRCLES circles all over the screen
  //sizes are random, noFill() by default

  let smallDiameter = Infinity;
  let smallX = -1;    //placeholder
  let smallY = -1;    //'dummy' values

  noFill();
  for(let i = 0; i < NUM_CIRCLES; i++){
    let x = random(0, width);  //random(width)
    let y = random(0, height);
    let d = random(20,60);
    circle(x,y,d);

    //is this the new smallest circle???
    if(d < smallDiameter){ //yes
      smallDiameter = d;
      smallX = x;
      smallY = y;
    }
  }
  //DRAW/COLOR IN the smallest circle
  fill("orange");
  circle(smallX, smallY, smallDiameter);
}