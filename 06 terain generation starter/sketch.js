/ Terrain Starter

// Global Variables
let rectWidth = 2;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //TEMPORARY! 
            //keep until panning feature
            //noLoop causes loop() to only
            //run one time.

}

function keyPressed(){
  rectWidth ++;
  //what happens to generateTerrain()
  //if rectWidth becomes 0??
  background(220);
  generateTerrain();
}

function generateTerrain(){
  //using many skinny
  //rectangles, generate
  //random terrain
  for(let x = 0; x<width; x+=rectWidth){
    //first, generate a [random] height
    let h = random(0,height);
    //BUT, change this to use noise()...
    //let h = ...noise() stuff


    //draw the rectangle
    rect(x, height, rectWidth, -h);
  }
}

function draw() {
  background(220);
  generateTerrain();
}
