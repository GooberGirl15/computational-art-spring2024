let gravity;

function setup(){
    waterfall = new ParticleSystem(250,200);
    gravity = createVector(0,0.01);
    airCanvas = createCanvas(800,700);
    


}



function draw(){
    airCanvas.background(0,80);
    waterfall.update();

}






