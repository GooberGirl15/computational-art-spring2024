// Image to Animation adapted from https://editor.p5js.org/stungeye/sketches/zEMpTwHvu
class State3{
    constructor(){
        this.numFrames = 5;
        this.currentFrame = 0;
        this.pimages = [];
        

    }
    setup(){
    }

    preload(){
        for (let i = 0; i < this.numFrames; i++){
        this.pimages[i] = loadImage("./media/pflag/frame" +nf(i,4)+".png")
    }
}

    draw(){
        background(0)
        this.currentFrame = frameCount % this.numFrames;
        image(this.pimages[this.currentFrame],0,0);
        this.pimages[this.currentFrame].resize(width,height);
        
    }

}