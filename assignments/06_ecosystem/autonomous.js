class Vehicle {
    constructor(x, y, flowfield) {
      this.pos = createVector(x, y);
      this.vel = p5.Vector.random2D();
      this.acc = createVector();
      this.maxSpeed = 4;
      this.maxForce = 0.1;
      this.flowfield = flowfield;
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    update() {
      let desired = this.flowfield.lookup(this.pos).copy();
      desired.setMag(this.maxSpeed);
  
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
  
      this.applyForce(steer);
  
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    display() {
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      // noFill();
      fill(239,97,37);
      noStroke();
      // strokeWeight(2);
      beginShape();
      vertex(30, 15);
      vertex(-30, 15);
      vertex(-30, -15 );
      endShape(CLOSE);
      pop();
    }
  
    edges() {
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
  }