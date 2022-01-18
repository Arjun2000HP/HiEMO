
var a,ai,w, wi;
var e, ei;
var f1;
var rss;
var timer=7;
var bn;
var texty=true;
var btn, bns;
var bmp;
var bmp1;
var btry1;
var btry;
var sry, sri;
var crs, crss;
var slp,sli

function preload(){
 ai=loadImage("jarvis2.jpg");
 wi=loadImage("future.jpg");
 ei=loadImage("emopet.png");
 rss=loadSound("Boom Boom.mp3");
 sri=loadImage("battery.png");
 crss=loadImage("crash.jpg");
 sli=loadImage("sulking.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   a=createSprite(700,400);
   a.addImage(wi);
   a.scale=1;

   w=createSprite(1000,300);
   w.velocity.x=-9;
   w.addImage(ei);
   w.scale=0.3;
   
   f1=createSprite(300,300,20,1);
   f1.visible=false;

   bn=createButton('HI EMO');
   bn.position(980,150);
   bn.hide();
   
   btn=createButton('NOICE')
   btn.position(960,250);
   btn.hide();
   
   bns=createButton('COOL')
   bns.position(910,250)
   bns.hide();

   bmp=createButton('YES')
   bmp.position(910,270);
   bmp.hide();

   bmp1=createButton('NO, but I may soon')
   bmp1.position(910,290);
   bmp1.hide();

   btry=createSprite(500,700,600,20);
   btry.visible=false;
   
   btry1=createSprite(500,150,100,10);
   btry.visible=false;

   crs=createSprite(860,320)
   crs.addImage(crss)
   crs.scale=0.5
   crs.visible=false;

}

function draw() {
background(0,0,0);  

  if(frameCount %65==0){
    w.velocity.x= 0;
  }
  if(frameCount %90===0){
    timer= 0;
  }
   w.bounceOff(f1);
  rss.play();
drawSprites();
  
  if(timer===0 && texty===true){
    stroke(255,0,0)
    strokeWeight(3)
    textSize(17)
    text("H i   F r i e n d s ,   I   a m   E . M . O   y o u r   N e w   A I   D e s k t o p   P E T ", 560,200);
    bn.show();
  }
  
  if(key==='o'){
    /*stroke(0,255,0)
    strokeWeight(2)
    textSize(17)
    text("F r o m   N o w   I   w i l l   b e  w i t h  y ou   2 4  b y  7  ", 560,240);*/
    velcty();
  }
  if(key==='O'){
  error();
  }
  if(key==='e'){
    txt3();
  } 
  if(key==='E'){
    error();
    }
  if(key==='l'){
    cnd();
  }
  if(key==='L'){
    error();
    }
  if(key==='n'){
    nope();
    if(frameCount %20===0){
      btr();
    }
    btr();
    crsh();
    wrs();
    
  }
  if(key==='N'){
    error();
    }
  if(key==="s"){
    sure();
  }
  if(key==='S'){
    error();
    }
 
}
function velcty(){
  stroke(0,255,0)
  strokeWeight(3)
  textSize(17)
  text("F r o m   N o w   I   w i l l   b e  w i t h  y ou   2 4  b y  7  ", 560,240);
  btn.show();
  rss.stop();
  }

function txt3(){
  if(key==='e'){
    stroke(0,0,255)
    strokeWeight(3)
    textSize(17)
    text("I   a m   d e s i g n e d   b y   m a s t e r   A R J U N ,   h e   h a s   m a d e   m e   t o   e n t e r t a i n   y o u ", 560,240);
   bns.show();
   rss.stop();
  }
  }
  function cnd(){
    stroke(255,255,255)
    strokeWeight(3)
    textSize(17)
    text("W o u l d   y o u   l i k e   t o   a s k   m e   a n y   Q u e s t i o n s ? ", 560,240);
   bmp.show();
   bmp1.show();
   rss.stop();
  }

  function nope(){
    stroke(255,255,255)
    strokeWeight(2)
    textSize(17)
    text("N i c e   d e c i s i o n ,   F r e e l y   C o n t a c t   M a s t e r   f o r   r e v i e w s   a n d   q u e r y ", 560,240);
   
    rss.stop();

    stroke(255,0,0)
    strokeWeight(2)
    textSize(17)
    text ("M y   b a t t e r y   i s   g o i n g   d o w n ,   I  t h i n k    I   s h o u l d   R e s t  N O W", 560,330);
  }

  function sure(){
    stroke(255,255,255)
    strokeWeight(3)
    textSize(17)
    text("P l e a s e  C o n t a c t   M a s t e r   f o r   y o u r   r e v i e w s   a n d   q u e r y ", 560,240);
    rss.stop();

  }

  function error(){
    stroke(255,255,255)
    strokeWeight(3)
    textSize(15)
    text("E R R O R : C A P S   L O C K   I S   O N ", 200,100);
    rss.stop();

  }

  function btr(){
    if(frameCount %9===0){
      stroke(255,255,255)
      strokeWeight(3)
      textSize(15)
      text("E R R O R : C o n n e c t i o n   L o s t ", 200,120);
      rss.stop();

    }
  }
  function crsh(){
    rss.stop();

    if(frameCount %15===0){
      if(crs.visible===false){
        crs.visible=true;
      }else{crs.visible=false;}
    }

  }

  function wrs(){
      w.visible=false;
      slp=createSprite(200,200)
      slp.addImage(sli)
      slp.scale=0.5
      rss.stop();

  }








