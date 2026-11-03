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
}

function draw() {
  background(220);
  renderGrid();
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
