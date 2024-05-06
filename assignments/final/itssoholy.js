

let automataFlag = false;
let constellationFlag = false;
let raysFlag = false;
let pFlag = false;
let holyFlag = false;
let noiseFlag = false;
let beachFlag = false;
let bFlyFlag = false;
let fractalFlag = false;
let dFuncFlag;

palFlag = new State3();


function preload(){
    windTempos = loadSound("./media/WindTempos.mp3");
    ascii = loadImage("./media/asciiJesus.png");
    palFlag.preload();
    font = loadFont("./media/SadMachine.ttf");
    
}


function setup(){
    createCanvas(800,600);
    colorMode(HSB);
    frameRate(30);

    windTemposfft = new p5.FFT();

    automata = new State1();
    automata.setup();

    constellation = new State2();
    constellation.setup();

    Holy = new State4();
    Holy.setup();

    Noize = new State5();
    Noize.setup();

    Beach = new State6();
    Beach.setup();

    bFly = new State7();

    Fractal = new State8();
    Fractal.setup();

    Func = new detailFuncs();
    Func.setup();

    Autonomous = new State9();
    Autonomous.setup();
   



}
function draw(){
    // background(100,100,100,0.2)
    if (automataFlag == true){
        automata.draw();
    } if (constellationFlag == true){
        constellation.draw();
    } if (raysFlag == true){
        drawRays();
    } if (pFlag == true){
        palFlag.draw();
    } if (holyFlag == true){
        Holy.draw();
    } if (noiseFlag == true){
        Noize.draw();
    } if (beachFlag == true){
        Beach.draw();
    } if (bFlyFlag == true){
        bFly.draw();
    } if (fractalFlag == true){
        Fractal.draw();
        Fractal.drawCircle();
    }if (dFuncFlag == 1){
        Func.draw1()
    }if (dFuncFlag == 2){
        Func.draw2()
    }if (dFuncFlag == 3){
        Func.draw3()
    } if (dFuncFlag == 0){
        // clear();
    }

}




// Simple Functions //
var change = function changeBg(c){
    noStroke();
    fill(c);
    rect(0,0,width,height);

}
   
var dS = function drawStates(yn){
    if (yn == 1) {
        automataFlag = true;
    } if (yn == 0){
        fractalFlag = false;
        automataFlag = false;
        constellationFlag = false;
        raysFlag = false;
        pFlag = false;
        holyFlag = false;
        noiseFlag = false;
        beachFlag = false;
        bFlyFlag = false;
        dFuncFlag = 0;
    } if (yn == 2){
        constellationFlag = true;
    } if (yn == 3){
        raysFlag = true;
    } if (yn == 4){
        pFlag = true;
    } if (yn == 5){
        holyFlag = true;
    } if (yn == 6){
        noiseFlag = true;
    } if (yn == 7){
        beachFlag = true;
    } if (yn == 8){
        bFlyFlag = true;
    } if (yn == 9){
        fractalFlag = true;
    } if (yn == 10){
        dFuncFlag = 1;
    }if (yn == 11){
        dFuncFlag = 2;
    }if (yn == 12){
        dFuncFlag = 3;
    }
}

var flower = function drawFlower() {
    background(88,62,76);
    stroke(262,68,72); // adjust color for a petal
    fill(302, 100, 22);
    push();
    translate(width/2,height/2);
    for (let i = 0; i < 10; i++) {
        // Petals
        // fill(255, 200, 0);
        ellipse(mouseX, 40, 40, mouseY);
        rotate(PI/5);
      }
      fill(320, 79, 15);
      ellipse(0, 0, 30, 30);
      pop();
}

var techspace = function drawTechscape() {
    background(0);
    stroke(110.6,92.2,100);
    strokeWeight(1);
    for (let i = 0; i < width; i += 10) {
      for (let j = 0; j < height; j += 10) {
        let noiseVal = noise(i, j);
        let strokeVal = map(noiseVal, 0, 1, 50, 255);
        stroke(110.6,92.2,100,strokeVal);
        point(i, j);
      }
    }
    // noStroke();
    fill(0,0,50,0.2); // transparent yellow circles
    for (let i = 0; i < 10; i++) {
      ellipse(random(width), random(height), random(20, 50));
    }
}

var glowRects = function glowRects(){
    background(0,0,0);
    // translate(width/2,height/2);
    r = 200;
    xoff = 0;

    for (var c = 100; c < TWO_PI; c+=0.1){
        x = r * cos(c);
        y = r * sin(c);
        stroke(1);
        fill(38,96,96);
        rect(x,y,50,50);

    }
    // filter(BLUR,3);

    colora = random(100);
    colorAmount = 1 + random(3);

    translate(width/2,height/2);
    r = 100;
    yoff = 100
    xoff = 180;
    noStroke();
    for (var c = 0; c < TWO_PI; c+=0.4){
    palatte = (colora + (c%colorAmount) * (255/colorAmount)) % 255
    size = random(10,70);
    x = r * cos(c);
    y = r * sin(c);

    negx = r * -cos(c);
    negy = r * -sin(c);

    // TOPRIGHT
    if (c < PI/2){
    x = -x;
    y = -y
    push();
    translate(x,y);
    fill(palatte,random(255),random(255));
    rotate((frameCount * 0.5)*noise(-size,y));
    rect(-size-random(20,xoff),-size-random(10,yoff)+size,size);
    pop();
    }


    // RIGHTBOTTOM
    if (c < PI/2){
    y = -y;
    push();
    translate(x,y);
    fill(palatte,random(255),random(255));
    rect(-size-random(20,xoff),-size+yoff,size);
    pop();
    
    }
    // TOPLEFT
    if (c < PI/2){
       x = -x;
       y = -y;
        push();
        translate(x,y);
        fill(palatte,random(255),random(255));
        rect(-size+random(xoff),-size-yoff,size);
        pop();

    }
    // BOTTOMLEFT
    if (c < PI/2){
        x = x
        y = -y;

        push();
        translate(x,y);
        fill(palatte,random(255),random(255));
        rotate((frameCount * 0.5)*noise(size,y));
        // filter(BLUR);
        rect(-size+random(20,xoff),-size+(random(yoff)),size);
        pop();

    }

}
}

var randomRects = function randomRects(hue){
    background(hue)
    push();
    stroke(0,0,0);
    strokeWeight(5);
    rect(random(width),random(height),random(10,100),random(10,100));
    pop();
}

var randomCircles = function randomCircles(hue){
    background(hue);
    push();
    fill(hue+20);
    strokeWeight(1);

    ellipse(random(width),random(height),random(10,100),random(10,100));
    pop();
}

var fall = function Fall(hue){
    background(0,0,100);
   let x = random(width);
   let y = random(height);
   let size = random(5,100);
   fill(hue)
   ellipse(x,y,size);
}

var asciiJesus = function asciiJesus(){
    background(0,0,0);
    image(ascii,width/2,0);


}

var intro = function Intro(){

    let palatte = [
    c1 = color(278,99,36),
    c2 = color(306,99,31),
    c3 = color(310 ,98,21),
    c4 = color(192,56,54),
    c5 = color(166,56,60),
    c6 = color (190,100,57),
      ]
  
  color1 = random(palatte);
  color2 = random(palatte);
  textSize(70);
  textFont("SadMachine");
  fill(0,0,100);
  
  for (let bg = 0; bg < height; bg++){
            let n = map(bg,0,width,0,1);
            let gradCol = lerpColor(color1,color2,n);
            stroke(gradCol);
            line(0,bg,width,bg);
          }
  
  let wT = "WIND TEMPOS"
  let spacing = 40;
  
  text(wT,width/2-200,height/2);

  note = getRandomWord();
  for (let i = 0; i < note.length; i++) {
            let x = 250 + i * spacing;
            let y = 300 + sin(frameCount * 0.01 + i) * 30;
            text(note.charAt(i), x, y-200);
            // text(note.charAt(i), x, y-100);
            text(note.charAt(i),y-200,x-108);
            push();
            fill(0,0,0);
            // text(note, x+150,x+180);
            text(note.charAt(i), x+5, y-105);
            text(note.charAt(i), x+5, y-200);
            text(note.charAt(i), y-200, x);
            pop();
          }
}

var drawRays = function drawRays() {
    background(0);
    push();
    translate(width/2,height/2);
    for (let i = 0; i < 10; i++) {
      stroke(255, random(100, 255));
      length = map(noise(length),0,1,0,50)
    //   stroke(255);
      orbit = map(mouseX, 0, width,0,2)
      line(0, 0, random(300),length);
      // console.log(length);
    //   length += 0.1;
      rotate(PI/orbit);
    }
    pop();
    // clear();
}

function getRandomFunction(){
    let randfunc=random([change,flower,techspace,glowRects,
        randomRects,randomCircles,fall]);
    return randfunc;
}

function getRandomWord(){
    let randword = random(["KENNEDY", "A PROJECT BY", "WIND TEMPOS", "PORTER ROBINSON"])
    return randword;
}

function cueList(){
    let a  = color(100,20,100);
    let b  = color(320,98,64);
    let c  = color(191,98,66);
    let d  = color(30,69,95);
    let e = color(0,0,0);


    // super super simple random functions

    windTempos.addCue(171.1,intro);
    windTempos.addCue(171.15,intro)
    windTempos.addCue(171.2,intro,);
    windTempos.addCue(171.25,intro,"KENNEDY");
    windTempos.addCue(171.3,intro,"A PROJECT BY");
    windTempos.addCue(171.35,intro,e);
    windTempos.addCue(171.4,intro,a);
    windTempos.addCue(171.45,intro,e);
    windTempos.addCue(171.5,intro,"A PROJECT BY");
    windTempos.addCue(171.55,intro,e);
    windTempos.addCue(171.6,intro,e);
    windTempos.addCue(171.65,intro,a);
    windTempos.addCue(171.7,intro,a);
    windTempos.addCue(171.75,intro,e);
    windTempos.addCue(171.8,intro,e);
    windTempos.addCue(171.85,intro,a);
    windTempos.addCue(171.9,intro,a);
    windTempos.addCue(171.95,intro,e);
    windTempos.addCue(172,intro,a);
    windTempos.addCue(172.1,intro,e);
    windTempos.addCue(172.15,intro,a);
    windTempos.addCue(172.2,intro,e);
    windTempos.addCue(172.25,intro,a);
    windTempos.addCue(172.3,intro,e);
    windTempos.addCue(172.35,intro,"A PROJECT BY");
    windTempos.addCue(172.4,intro,e);
    windTempos.addCue(172.45,intro,a);
    windTempos.addCue(172.5,intro,e);
    windTempos.addCue(172.55,intro,a);
    windTempos.addCue(172.6,intro,e);
    windTempos.addCue(172.65,intro,a);
    windTempos.addCue(172.7,intro,e);
    windTempos.addCue(172.75,intro,a);
    windTempos.addCue(172.8,intro,e);
    windTempos.addCue(172.85,intro,a);
    windTempos.addCue(172.9,intro,e);
    windTempos.addCue(173.1,intro,a);
    windTempos.addCue(173.15,intro,e);
    windTempos.addCue(173.2,intro,e);
    windTempos.addCue(173.25,intro,a);
    windTempos.addCue(173.3,intro,a);
    windTempos.addCue(173.35,intro,e);
    windTempos.addCue(173.4,intro,a);
    windTempos.addCue(173.5,intro,e);
    windTempos.addCue(173.6,intro,a);
    windTempos.addCue(173.7,intro,e);
    windTempos.addCue(173.8,intro,a);
    windTempos.addCue(173.9,intro,e);
    windTempos.addCue(174.1,intro,e);
    windTempos.addCue(174.2,intro,a);
    windTempos.addCue(174.3,intro,e);
    windTempos.addCue(174.4,intro,a);
    windTempos.addCue(174.5,intro,e);
    windTempos.addCue(174.6,intro,a);
    windTempos.addCue(174.7,intro,e);
    windTempos.addCue(174.8,intro,a);
    windTempos.addCue(174.9,intro,e);
    windTempos.addCue(175.1,intro,a);
    windTempos.addCue(175.2,intro,e);
    windTempos.addCue(175.3,intro,a);
    windTempos.addCue(175.4,intro,e);
    windTempos.addCue(175.5,intro,a);
    windTempos.addCue(175.6,intro,e);
    windTempos.addCue(175.7,intro,a);
    windTempos.addCue(175.8,intro,e);
    windTempos.addCue(175.9,intro,a);

    // more detailed functions
    windTempos.addCue(176.1,getRandomFunction(),a);
    windTempos.addCue(176.4,getRandomFunction(),e);
    windTempos.addCue(176.7,getRandomFunction(),a);
    windTempos.addCue(176.9,getRandomFunction(),e);
    windTempos.addCue(177.2,getRandomFunction(),a);
    windTempos.addCue(177.5,getRandomFunction(),e);
    windTempos.addCue(177.7,getRandomFunction(),a);
    windTempos.addCue(177.9,getRandomFunction(),e);
    windTempos.addCue(178.1,getRandomFunction(),a);
    windTempos.addCue(178.3,getRandomFunction(),e);
    windTempos.addCue(178.5,getRandomFunction(),a);
    windTempos.addCue(178.7,getRandomFunction(),e);
    windTempos.addCue(178.9,getRandomFunction(),a);
    windTempos.addCue(179.1,getRandomFunction(),e);
    windTempos.addCue(179.3,getRandomFunction(),a);
    windTempos.addCue(179.6,getRandomFunction(),e);
    windTempos.addCue(179.9,getRandomFunction(),a);
    windTempos.addCue(180.1,getRandomFunction(),e);
    windTempos.addCue(180.3,getRandomFunction(),a);
    windTempos.addCue(180.6,getRandomFunction(),e);
    windTempos.addCue(180.9,getRandomFunction(),a);
    windTempos.addCue(181.3,getRandomFunction(),a);
    windTempos.addCue(181.7,getRandomFunction(),e);
    windTempos.addCue(181.85,getRandomFunction(),a);
    windTempos.addCue(182.2,getRandomFunction(),e);
    windTempos.addCue(182.7,getRandomFunction(),a);
    



    // Important functions

    // IT'S SO HOLY
    windTempos.addCue(183,dS,5);


    // windTempos.addCue(185.2,dS,13);
    // windTempos.addCue(185.1,dS,0);

    // Light Rays
    windTempos.addCue(188.7,dS,3);
    windTempos.addCue(191.7,dS,0);

    // Noise Circle
    windTempos.addCue(191.7,dS,6);
    windTempos.addCue(195.7,dS,0);

    // Grass 
    windTempos.addCue(195.7,dS,7);
    windTempos.addCue(199.7,dS,0);

    // Constellation
    windTempos.addCue(199.7,dS,2);
    windTempos.addCue(206.5,dS,0);

    // Butterflies
    windTempos.addCue(206.5,dS,8);
    windTempos.addCue(210.5,dS,0);

    // Mandala
    windTempos.addCue(210.5,dS,9);
    windTempos.addCue(214.5,dS,0);

    // Automata
    windTempos.addCue(214.5,dS,1);
    windTempos.addCue(247.4,dS,0);

    // palestine flag
    windTempos.addCue(247.4,dS,4);
    windTempos.addCue(252,dS,0);
   

    // Glowing Divine
    windTempos.addCue(252,asciiJesus);


    // Natural
    windTempos.addCue(253.5,dS,10);
    windTempos.addCue(254.2,dS,0);

    // Tech
    windTempos.addCue(254.2,dS,11);
    windTempos.addCue(254.9,dS,0);
    // Tech
    windTempos.addCue(254.9,dS,12);
    windTempos.addCue(259,dS,0);
    // Tech
    windTempos.addCue(259,change,e);

   
}

function mouseClicked(){
    userStartAudio();
    cueList();
    windTempos.play();
    windTempos.jump(171,90);
    windTempos.setVolume(0,3,104);
}