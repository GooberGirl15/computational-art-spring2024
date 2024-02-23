let gravity;
// let gif;
// let gifCreate;

// function preload(){
// gif = loadImage('beating heart.gif');
// // gifCreate = createImg('beating heart.gif');

// }

function setup(){
    createCanvas(500,400);
    waterfall = new ParticleSystem(250,200);
    gravity = createVector(0,0.0001);
    // image(gif,100,200);
    // gif.resize(170,200);
    // gifCreate.resize(170,200);

}

// function mouseClicked(){
//     if (waterfall === false){
//      waterfall.update() = false;
//     }
//  }

function draw(){
    background(0);
    // image(gif,190,100);
    // gifCreate.position(200,200);

    waterfall.update();

}



