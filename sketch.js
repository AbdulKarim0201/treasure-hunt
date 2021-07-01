var bg,bg2,form,system,code,security,treasureImg,gameo = false,gamei,wow,wowImg;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  treasureImg = loadImage("aladdin_cave2.jpg");
  gamei = loadImage("treasure.jpg");
  //load image for the treasure background
  wowImg = loadImage("ABCDEFG_adobespark.png");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  wow = createSprite(500,250,10,10);
  wow.addImage(wowImg);
  wow.visible = false;
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  


  if(score === 3) {
    clear()
    background(gamei)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

 
  drawSprites()
}