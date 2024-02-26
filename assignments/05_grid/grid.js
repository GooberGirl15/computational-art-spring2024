cellCount = 100;
let cellWidth;
let cellHeight;


function setup(){
  createCanvas(600,400);
  colorMode(HSB);

  cellWidth = width/cellCount;
  cellHeight = cellWidth;

}

function draw(){
  background(0,10,10, 0.2);

  Grid(); 

}

function Grid(){
  for (let i = 0; i< cellCount; i++){
    for (let j = 0; j< cellCount; j++){

      let x = cellWidth * i;
      let y = cellWidth * j;
      push();
      translate(x,y);
   
    let coloroffset = 30; 
    let hue = map(noise(x * 0.01,y * 0.01),0,1,0,300);
    let offset = (hue + 180 - coloroffset) % 360; 

    fill(frameCount + hue,80,100,0.2);

    noStroke();
    rect(0,0, cellWidth, cellHeight);


    noStroke();
    hue = map(i, 0, cellCount, 140,210);
    // fill(random(0,90),100,100);
    fill((random(240,180)),100,100,0.8);
    ellipse(cellWidth/2, cellHeight/2, cellWidth/2, cellHeight/2);
    pop();

  }
}
}