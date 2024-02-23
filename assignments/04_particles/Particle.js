class Particle {
    constructor(x, y, h) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-2, 2), random(-1, 1));
        this.acc = createVector(0, 0);
        colorMode(HSB,360,100,100);

        // this.mass = (1, 5);

        // Make the radius have something to do with the mass.
        this.radius = 6;

        this.lifetime = 355;
        this.speed = 1;
    }


    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    // addWaterDrag() {
    //     // fDrag = -C * mag(velocity)^2
    //     let dragConstant = -0.3;
    //     let forceDrag = this.vel.mag() * this.vel.mag() * dragConstant;
    //     let drag = p5.Vector.normalize(this.vel);
    //     drag.mult(forceDrag);
    //     this.addForce(drag);
    // }

    Jitter(){
        this.pos.x += random(-this.speed, this.speed);
        this.pos.y += random(-this.speed, this.speed);
    }

    update() {
        // Movement
        this.vel.add(this.acc);
        this.vel.limit(5); 
        this.pos.add(this.vel)
        // translate(p5.Vector.fromAngle(millis()/350))
        this.addForce(gravity);
        this.Jitter();

        this.lifetime -=2
        if (this.lifetime <0){
            this.destroy = true;
        };

           }



display(){
    push();
    noStroke();
    fill(frameCount%360, 100, 50);
    ellipse(this.pos.x, this.pos.y, this.radius *2);
    pop();
}
}