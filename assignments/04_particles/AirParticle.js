
class AirParticle {
    constructor(x, y) {
    this.pos = createVector(this.x,this.y);
    this.angle = random(TWO_PI); // Random initial angle
    this.radius = random(50, 150); // Random radius from center
    this.angularSpeed = random(0.01, 0.05); // Random angular speed
    this.size = random(2, 8); // Random size
    this.color = color(random(200, 255), random(100, 200), 255, random(50, 150)); // Random airy color
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

    Air(){
        this.angle += this.angularSpeed;
        translate(p5.Vector.fromAngle(millis()/350))
       
        this.displayAir();

        this.die();
    }
    
    displayAir(){
        // let aircolor = color(random(0,0), 0,100);
        let aircolor = 255;
        this.pos.x = mouseX + this.radius * cos(this.angle); // Calculate x position
        this.pos.y = mouseY + this.radius * sin(this.angle); // Calculate y position
        noStroke();
        fill(aircolor, 10);
        ellipse(x, y, this.size);

    }

    update() {
        this.Air();
           }

        }


