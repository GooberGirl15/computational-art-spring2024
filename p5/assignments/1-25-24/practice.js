let dots = [];
let numDots = 100;
let gravity = 0.08;

function setup(){
    createCanvas(600,400);
    colorMode(HSB);

    for (let i = 0; i < numDots; i++){
        let x = width / numDots * i;
        dots[i] = new Dot(x, height/2,17,i);

    }
}

function draw(){
    background(10,10,100,0.1);



    for (let i=0; i < dots.length;i++){
        dots[i].update();

    }

}

class Dot{
    constructor(x,y,diameter, id){
        this.position = createVector(x,y);
        this.velocity = createVector(0,0);
        this.diameter = random(-1,20);
        this.id = id;
        this.hue = random(this.id/numDots * 360);
    }

    update(){
        // let vectorToMouse = createVector(mouseX - this.position.x, mouseY-this.position.y);
        // vectorToMouse.normalize();
        // this.velocity = vectorToMouse;

        this.velocity.y += gravity;
        this.position.add(this.velocity);

        if (this.position.y + this.diameter/2 > height){
            this.velocity.y *= -1
        }



        this.position.add(this.velocity);
        fill(this.hue, 50,100);
        ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    }
}