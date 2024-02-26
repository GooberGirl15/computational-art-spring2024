let gravity;
let picker;

function setup(){
    mainCanvas = createCanvas(500,400);
    waterfall = new ParticleSystem(250,200);
    gravity = createVector(0,0.01);
    airCanvas = createCanvas(500,400);
    


}



function draw(){
    airCanvas.background(0,80);
    waterfall.update();

}






