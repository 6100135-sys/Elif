// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//grid sixed 6 x 5
// 0 (black) 225 (white)

let grid = [
  [0,   255, 0,   255, 0,   255],
  [255, 0,   255, 0,   255, 0],
  [255, 255, 255, 255, 255, 255],
  [0,   0,   0,   0,   0,   0,],
  [255, 255, 0,   255, 255, 0]
];

let rows = grid.length;
let cols = grid[0].length;
let tilesize = 60;


async function setup() {
  createCanvas(cols*tilesize, rows*tilesize);
  randomArray(grid);
}

function draw() {
  background(220);
  renderGrid();
  getCurrentX();
  if (win(grid)) {
  fill(255,0,0);
  textSize(50);
  text("You Win!", 100, 100);
  }
}

function getCurrentX(){
  //determine current col pos of mouse
  fill(255,0,0);
  let constrainedX = constrain(mouseX,0,width-1);
  return int(constrainedX/tilesize);
}

function getCurrentY(){
  //determine current row pos of mouse
  let constrainedY = constrain(mouseY,0,height-1);
  return int(constrainedY/tilesize);
}

function flip(x,y){
  //flip the tile at postion (x,y);
  if(grid[y][x] === 255) grid[y][x] = 0;
  else grid[y][x] = 255;
}

function mousePressed(){
  //only do a flip if mouse is one the canvas
  if(mouseX < width && mouseY < height){
    let x = getCurrentX();
    let y = getCurrentY();

  if (keyIsDown(SHIFT)) {
    flip(x,y);
    console.log("Shift clicked!");
  } 
  else {
    if(x-1 >= 0) flip(x-1, y);//left
    if(y-1 >= 0) flip(x, y-1);//up
    if(y+1 >= 0) flip(x, y+1); // down
    if(x+1 <= cols) flip(x+1, y);// right
    flip(x,y);
    console.log("Normal click!");
  }
    //always
    //flip(x,y);

    //IF THEY EXIST:
    //flip the cardinal neigboors (NSEW)
    //if(x-1 >= 0) flip(x-1, y); // LEFT
    //if(y-1 >= 0) flip(x, y-1); //UP

    //if(x+1 >= )
  }
}

function win(grid) {
  let first = grid[0][0];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {

      if (grid[row][col] !== first) {
        return false;
      }

    }
  }

  return true;
}

function randomArray(grid){
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      grid[row][col] = Math.random() < 0.5 ? 0 : 255;
    }
  }
}



function renderGrid(){
  //interpret the data stored in 2D array
  //and draw a matrix to square to reflect
  // it.
  for(let y = 0; y < rows; y++){//y:01234
    for(let x = 0; x<cols; x++){//x:012345
      let fillcolor = grid[y][x];
      fill(fillcolor);
      square(x*tilesize, y*tilesize, tilesize);
      //y  x
      //0  0
      //0  1
      //0  2
      //0  3
      //0  4
      //0  5
    }
  }
}
