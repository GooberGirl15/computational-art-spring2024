let h = 0;
let numCircles = 100;
function setup(){
    createCanvas(600,600);
    colorMode(HSB);
  
  noStroke();
}

let xoff = 0.01; 
function draw(){
    background(0,0,0);

    let hue = (150, 100, 100);

    fill(hue);
    ellipse(height/2,300,300);



    h+=1;   
//   for (let i = 0; i < numCircles; i++){
//     let x = map(i,0,numCircles, 400, 400);
//     let hue = map(i,0,numCircles,0,360);
    
//     let tall = map(noise(xoff),0,1,10,300);
    
//     fill(hue,80,100);
//     ellipse(x,height/2,width/numCircles, tall);

    xoff +=2;
  }
