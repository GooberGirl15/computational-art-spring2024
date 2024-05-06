class State6{
    constructor(){
        this.yoff = 0;

    }

    setup(){
    }

    draw(){
        background(205,98,100,0.2);
        let top = 150;
        let bottom = height;

        strokeWeight(1);

        for (let i = 0; i < width; i++){
            let y1 = noise(i * 0.02, this.yoff) * 50; 
            let y2 = noise(i * 0.02 + 1000, this.yoff) * 50;

            push();
            stroke(0);
            line(i * 7, top + y1, i * 15, bottom+y2);
            pop();
            stroke(39,37,95);
            line(i*7,200,i,0);
        }
    this.yoff += 0.01;


}
}