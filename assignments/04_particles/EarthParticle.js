
class EarthParticle {
    constructor(x, y, Element, h) {
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(random(-2, -4), random(-1, 1));
        this.acc = createVector(0, 0);
        this.Element = Element;
        colorMode(HSB,360,100,100);


        // Make the radius have something to do with the mass.
        this.size = random(2,10);
        this.mass = 1;
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

    Earth(){
        this.vel.add(this.acc);
        this.vel.limit(5); 
        this.pos.add(this.vel)
        // translate(p5.Vector.fromAngle(millis()/350))
        this.addForce(gravity);
        this.displayEarth();

        this.die();
    }
    
    displayEarth(){
        let earthcolor = color(random(0,40), 50,50);
        earthcolor.setAlpha(100);
        push();
        noStroke();
        fill(earthcolor);
        rect(this.pos.x, this.pos.y, this.size);
        pop();

    }

   

    update() {
        this.Earth();

           }




}


