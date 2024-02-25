
class FireParticle {
    constructor(x, y, Element, h) {
        this.pos = createVector(mouseX, mouseY);
        this.vel = createVector(random(-5,2),random(1,-1));
        this.acc = createVector(0, 0);
        this.Element = Element;
        colorMode(HSB,360,100,100);

        this.size = random(2,6);

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

    Fire(){
        let angle = noise(this.pos.x, this.pos.y);
        this.acc = p5.Vector.fromAngle(angle) * TWO_PI;
        this.vel.limit(5); 
        this.pos.add(this.vel);

        this.displayfire();

        this.die();
    
    
    }

  
      
   
    displayfire(){
        let firecolor = color(random(10,40), 100,100);
        push();
        noStroke();
        fill(firecolor);
        ellipse(this.pos.x, this.pos.y, this.size);
        pop();
    }

    update() {
        this.Fire();
        // Movement
        

           }




}


