class ParticleSystem {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.fireParticles = [];
        this.waterParticles = [];
        this.earthParticles = [];
        this.airParticles = [];
    }

    update() {
        this.fireParticles.push(new FireParticle(this.pos.x,this.pos.y));
        this.waterParticles.push(new WaterParticle(this.pos.x,this.pos.y));
        this.airParticles.push(new AirParticle(this.pos.x,this.pos.y));
        this.earthParticles.push(new EarthParticle(this.pos.x, this.pos.y));


        // Update the particles
        // FIRE
        for (let particle of this.fireParticles) {
            particle.update();
         
        }
        // // WATER
        for (let particle of this.waterParticles) {
            particle.update();
       
        }
        // AIR
        for (let particle of this.airParticles) {
            particle.update();
         
        }

        for (let particle of this.earthParticles) {
            particle.update();
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

        for (let i = this.airParticles.length - 1; i >= 0; i--) {
            if (this.airParticles[i].destroy) {
                this.airParticles.splice(i, 1);
    }
}


        for (let i = this.earthParticles.length - 1; i >= 0; i--) {
            if (this.earthParticles[i].destroy) {
                    this.earthParticles.splice(i, 1);
    
            }
    }
}
}