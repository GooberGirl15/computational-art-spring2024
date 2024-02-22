class Particle {
    constructor(x, y, h) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-2, 2), random(-1, 1));
        this.acc = createVector(0, 0);

        // this.mass = (1, 5);

        // Make the radius have something to do with the mass.
        this.radius = 5;

        this.lifetime = 355;
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

    update() {
        // Movement
        this.vel.add(this.acc);
        this.vel.limit(5); 
        this.pos.add(this.vel)
        translate(p5.Vector.fromAngle(millis()/1000))
        this.addForce(gravity);

        this.lifetime -=2
        if (this.lifetime <0){
            this.destroy = true;
        };

           }



display(){
    push();
    noStroke();
    fill(8,143,125,50);
    rect(this.pos.x, this.pos.y, this.radius *2);
    pop();
}
}