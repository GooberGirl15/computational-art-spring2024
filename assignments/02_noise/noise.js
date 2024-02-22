let x;
let waveHeight;
let waveSpeed;
let num;
function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
   size = random(5,10);
}

function draw() {
  background(0);
  waveHeight = 400;
  waveSpeed = mouseY/100
  for (i=0; i < width; i++){
  let num = map((x/frameCount),0,1,8,60);
  x = i;
  y = map(noise(x/num,waveSpeed),0,1,0,waveHeight);
  let hue = map(noise(x/mouseX,height/mouseX),0,1,0,360);
  ellipse(x,y,size);
  noStroke();
  fill(hue,80,100);
  }
}