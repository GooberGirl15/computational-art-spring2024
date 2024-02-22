let gravity;
function setup(){
    createCanvas(500,400);
    waterfall = new ParticleSystem(250,200);
    gravity = createVector(0,0.001);

}

// function mouseClicked(){
//     if (waterfall === false){
//      waterfall.update() = false;
//     }
//  }

function draw(){
    background(202);
    waterfall.update();
    // particle.update();
}

