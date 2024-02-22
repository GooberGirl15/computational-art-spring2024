class ParticleSystem {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.particles = [];
        // this.numParticles = 10;
    }

    update() {
        this.particles.push(new Particle(this.pos.x,this.pos.y))
        // console.log(this.particles);


        // Update the particles
        for (let particle of this.particles) {
            particle.update();
            particle.display();
        }

        // Lifetime
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].destroy) {
                this.particles.splice(i, 1);
            }
        }
    }
}