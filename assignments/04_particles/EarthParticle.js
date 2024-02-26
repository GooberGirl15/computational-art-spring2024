
class EarthParticle {
    constructor() {
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(random(2, 4), random(2, 4));
        this.acc = createVector(0, 0);
        colorMode(HSB,360,100,100);

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
        this.pos.add(this.vel);
        this.displayEarth();

        this.die();
    }
    
    displayEarth(){
        let earthcolor = color(random(0,40), 50,50);
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


