let gravity;
let picker;
let click = false;

function setup(){
    mainCanvas = createCanvas(500,400);
    waterfall = new ParticleSystem(250,200);
    gravity = createVector(0,0.01);
    airCanvas = createCanvas(500,400);
    


}



function draw(){
    airCanvas.background(0,80);
    waterfall.update();
    // mainCanvas.background(25);
    // waterfall.update();
    if (mouseIsPressed){
        click = true;
    } else{
        click = false;
    }

}






