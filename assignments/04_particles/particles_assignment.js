let gravity;

function setup(){
   createCanvas(800,700);
    waterfall = new ParticleSystem(250,200);
    gravity = createVector(0,0.01);
    


}



function draw(){
    background(0,80);
    waterfall.update();

}






