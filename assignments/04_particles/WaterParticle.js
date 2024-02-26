
class WaterParticle {
    constructor() {
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(random(-5, 2), random(-1, 1));
        this.acc = createVector(0, 0);
        colorMode(HSB,360,100,100);


        this.size = random(5,8);

        this.lifetime = 155;
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


