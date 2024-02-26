
class AirParticle {
    constructor(x, y) {
    this.pos = createVector(mouseX,mouseY);
    this.vel = createVector(random(2, 4), random(2, 4));
    this.acc = createVector(0, 0);
    this.angle = random(TWO_PI); // Random initial angle
    this.radius = random(50, 150); // Random radius from mouse
    this.angularSpeed = random(0.01, 0.05); // Random angular speed
    this.size = random(2, 8); // Random size
    this.color = color(random(200, 255), random(100, 200), 255, random(50, 150)); // Random airy color
    this.lifetime = 155;
  }


    die(){
        this.lifetime -=2
        if (this.lifetime <0){
            this.destroy = true;
        };

    }

    Air(){
        this.angle += this.angularSpeed;
        push();
        translate(p5.Vector.fromAngle(millis()/350));
        pop();
       
        this.displayAir();

        this.die();
    }
    
    displayAir(){
        let aircolor = 255;
        this.pos.x = mouseX + this.radius * cos(this.angle); // Calculate x position
        this.pos.y = mouseY + this.radius * sin(this.angle); // Calculate y position
        noStroke();
        fill(aircolor, 10);
        ellipse(this.pos.x, this.pos.y, this.size);

    }

    update() {
        this.Air();
           }

        }


