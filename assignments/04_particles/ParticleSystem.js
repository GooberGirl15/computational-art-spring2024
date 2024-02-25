class ParticleSystem {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.fireParticles = [];
        this.waterParticles = [];
    }

    update() {
        this.fireParticles.push(new FireParticle(this.pos.x,this.pos.y));
        this.waterParticles.push(new WaterParticle(this.pos.x,this.pos.y));


        // Update the particles
        for (let particle of this.fireParticles) {
            particle.update();
            // particle.display();
        }

        for (let particle of this.waterParticles) {
            particle.update();
            // particle.display();
        }

        // Lifetime
        for (let i = this.fireParticles.length - 1; i >= 0; i--) {
            if (this.fireParticles[i].destroy) {
                this.fireParticles.splice(i, 1);

            }
        }
        for (let i = this.waterParticles.length - 1; i >= 0; i--) {
            if (this.waterParticles[i].destroy) {
                this.waterParticles.splice(i, 1);
    }
}
    }
}