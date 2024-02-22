function setup(){
    createCanvas(600,600);
    slider = createSlider(0,1,0.1,0.1);
    slider.position(50,500);
    slider.size(400);

    

}

function draw(){
    background(255);
    push();
    translate(width/2,height/2);
    let g = slider.value();
    let xoff = 0;
    beginShape();
    stroke(0);
    let baseRadius = 0;

    for (let theta = 0; theta < 128*PI; theta +=0.2){
        let radius = baseRadius + map(noise(xoff),0,1,-15,15);

        let x = radius * cos(theta);
        let y = radius * sin(theta);

        vertex(x,y);

        xoff +=g;

        baseRadius +=0.1;
        
    }
    endShape();
    pop();

}