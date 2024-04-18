// synth and bass
let scale = 'major';
let bass;
let midiBassScale = [36,48];
let noteIndex = 0;
let midiVal, freq,bassline;

// envelope stuff
let env,amp;
let attackTime = 0.01;
let decayTime = 0.2;
let attackLevel = 1;
let decayLevel = 0;


// drums
let pattern;
let drumIndex = 0;
let patternIndex = 0;

// visuals
let wInt;
let wAmp;
let t = 0;
let tChange;


function preload(){
    hh = loadSound("samples/closedhh.wav");
    kick = loadSound("samples/kick.wav");
    tom = loadSound("samples/tom.wav");
    snare = loadSound("samples/snare.wav");
}

function setup(){
    // setup
    colorMode(HSB);
    createCanvas(600,400);
    userStartAudio();
    env = new p5.Envelope();
    env.setADSR(attackTime, decayTime);

    // visuals
    fft = new p5.FFT();
    fft2 = new p5.FFT();
    wInt = 0.5;
    wAmp = 0.6;

    // funtidbits
    synthLoop = new p5.SoundLoop(duringSoundLoop,0.8);
    synth = new p5.PolySynth;
    synthDelay = new p5.Delay();

    // bass
    bass = new p5.Oscillator("sawtooth");
    bassFilter = new p5.LowPass();
    bassDelay = new p5.Delay();
    bassLoop = new p5.SoundLoop(playBass);
    bassPulse = new p5.Pulse();

    // drums
    const onsets = 5;
  const pulses = 16;
  pattern = bresenhamEuclidean(onsets, pulses);
  drumLoop = new p5.SoundLoop(Beat, 0.4);




}

// Code from https://medium.com/code-music-noise/euclidean-rhythms-391d879494df
function bresenhamEuclidean(onsets, pulses) {
    const slope = onsets / pulses;
    let result = [];
    let previous = null;
    for (let i = 0; i < pulses; i++) {
      const current = Math.floor(i * slope);
      result.push(current !== previous ? 1 : 0);
      previous = current;
    }
    return result;
  }



function draw(){
    // setup
    background(343,72,53,0.8)
    let c = color(30,100,50);

    // ffts for waobbles
    fft.setInput(synth);
    let waobble = fft.waveform();
    fft2.setInput(bass);
    let basswaobble = fft2.waveform();

    let radius = map(waobble[0],-1,1,50,80);


   


    // mountains??
    push();
    beginShape();
    for(let i = 0; i < basswaobble.length; i++){
        let x = map(i, 0, basswaobble.length, 0, width);
        let y = map(basswaobble[i], -1, 1, 0, height);
        vertex(x, y);

    }
    background(275,80,50,0);
    pop();
    endShape();

    // sun
    woaoble(width/2,height/2,radius, c,waobble);

    // ground
    fill(259, 80, 32);
    stroke(0);
    rect(0,height-150, width,150);

}

function duringSoundLoop(timeFromNow){
    let note = midiToFreq(40);
    synthDelay.process(synth,0.5,.7,3000);
    synth.play(note,0.1, timeFromNow, 0.1);

}

function playBass(timeFromNow){
    bass.disconnect();
    bass.connect(bassFilter);
    bassFilter.connect();

    bass.start(timeFromNow);
    let midiBassVal = midiBassScale[noteIndex % midiBassScale.length];
    bassline = midiToFreq(midiBassVal);

    // Wanted a pulse, but decided not to keep it. The code is fun to play with though
    // bassDelay.process(bass,0.12,.3,2300);

    // bassPulse.amp(env);
    // bassPulse.freq(bassline + 40);
    // bassPulse.start()


    bass.amp(env);
    env.ramp(bass, 0, attackLevel, decayLevel);
    bass.freq(bassline);

    noteIndex++
  

}

function Beat(timeFromNow) {
    if (pattern[patternIndex]===1){
    kick.play(timeFromNow,1,0.1);
    }else{
      hh.play(timeFromNow,1,0.2)
    }
    patternIndex++;
    patternIndex = patternIndex % pattern.length
}


function woaoble(x, y, r,c,waobble){
    push();

    fill(c);
    translate(x,y);
    stroke(25,25,100);
    strokeWeight(1);

    beginShape();
    for (let a = PI/4; a <= TWO_PI + PI/4; a+= TWO_PI/360){
        nVal = map(noise(cos(a)*waobble[0] +1, sin(a)* waobble[0]+1,t*10),0,1,wAmp,2);
        x = r * cos(a) * nVal;
        y = r * sin(a) * nVal;
        vertex(x,y);
}
    endShape(CLOSE);

    pop();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        synthLoop.start();
        bassLoop.start();
        drumLoop.start();
    }
    if (keyCode === RIGHT_ARROW){
        synthLoop.stop();
        bass.stop();
        bassLoop.stop();
        drumLoop.stop();
    }
 }





