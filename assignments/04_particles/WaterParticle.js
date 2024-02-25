
class WaterParticle {
    constructor(x, y, Element, h) {
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(random(-2, 2), random(-1, 1));
        this.acc = createVector(0, 0);
        this.Element = Element;
        colorMode(HSB,360,100,100);


        // Make the radius have something to do with the mass.
        this.size = random(5,8);

        this.lifetime = 155;
        this.speed = 1;
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

    Water(){
        this.vel.add(this.acc);
        this.vel.limit(5); 
        this.pos.add(this.vel)
        // translate(p5.Vector.fromAngle(millis()/350))
        this.addForce(gravity);
        this.displayWater();

        this.die();
    }
    
    displayWater(){
        let watercolor = color(random(180,240), 100,100);
        push();
        noStroke();
        fill(watercolor);
        ellipse(this.pos.x, this.pos.y, this.size);
        pop();

    }

    update() {
        this.Water();
        // Movement
        

           }




}


