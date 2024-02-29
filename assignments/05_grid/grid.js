cellCount = 60;
let counter;
let cellWidth;
let cellHeight;


function setup(){
  createCanvas(800,400);
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
   
    let hue = map(noise(x * 0.01,y * 0.01),0,1,0,300);

    fill(random(0,150) + hue,80,100,0.1);

    noStroke();
    rect(0,0, cellWidth, cellHeight);


    // noStroke();
    hue = map(i, 0, cellCount, 140,210);
    // // fill(random(0,90),100,100);
    fill((random(240,180)),100,100,0.2);
    ellipse(cellWidth*2, cellHeight/2, cellWidth/2, cellHeight/2);
    pop();

  }
}
}