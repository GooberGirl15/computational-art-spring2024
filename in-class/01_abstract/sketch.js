let cam;
let tiles = [];

function setup(){
  canvas = createCanvas(800,400);
  cam = createCapture(VIDEO);
  cam.size(500,400);
  cam.hide();
  
}

function draw(){
 background(20);
  image(cam,150,0);
  
   tile = new Tile();
  
  numTilesX = Math.floor(cam.width/tile.width);
  
  
 for (let i = 0; i < numTilesX; i++){
    tiles[i] = new Tile(i *(40),random(400))
    // tiles.push(new Tile(i *(40),random(400)))
    console.log(tiles[i])
 }
  
  
  for (let i = 0; i <tiles.length; i++){
    tiles[i].display();
  }
  
  cam.loadPixels();

  
  
}
   

class Tile{
  constructor(xvalue,yval){
    this.width = 40;
    this.height = 30;
    this.x = 150 + xvalue;
    this.y = 0 + yval;
  }
  
  display(){
    image(cam, this.x, this.y, this.width,this.height);
  
}
}
