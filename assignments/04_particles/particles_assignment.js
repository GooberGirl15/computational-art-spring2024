let gravity;
let picker;

function setup(){
    createCanvas(500,400);
    waterfall = new ParticleSystem(250,200);
    gravity = createVector(0,0.01);
    


}



function draw(){
    background(0);

    waterfall.update();

}




