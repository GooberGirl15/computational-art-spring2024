let runTime = 1;

class Particle {
    constructor(x, y, Element, h) {
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(random(-2, 2), random(-1, 1));
        this.acc = createVector(0, 0);
        this.Element = Element;
        colorMode(HSB,360,100,100);


        // Make the radius have something to do with the mass.
        this.size = random(2,6);

        this.lifetime = 355;
        this.speed = 1;
    }

    Fire(){
        this.vel.add(this.acc);
        let angle = noise(this.pos.x *0.01, this.pos.y * 0.01);
        this.acc = p5.Vector.fromAngle(angle) * TWO_PI;
        this.vel.add(this.acc);
        // this.acc.mult(0.1);
        this.vel.limit(5); 
        this.pos.add(this.vel)

        // this.addForce(gravity);
        this.display();

        this.die();
    
    
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    die(){
        this.lifetime -=2
        if (this.lifetime <0){
            this.destroy = true;
        };

    }
   
  
    display(Element){
        let firecolor = color(random(10,40), 100,100);
        push();
        noStroke();
        fill(firecolor);
        ellipse(this.pos.x, this.pos.y, this.size);
        pop();
    }

    update() {
        
      setTimeout(this.Fire(), runTime * 1000); 
    }
    //     // Movement
    //     this.vel.add(this.acc);
    //     this.vel.limit(5); 
    //     this.pos.add(this.vel)
    //     // translate(p5.Vector.fromAngle(millis()/350))
    //     this.addForce(gravity);
    //     this.display();

    //     this.lifetime -=2
    //     if (this.lifetime <0){
    //         this.destroy = true;
    //     };

    //        }




}


