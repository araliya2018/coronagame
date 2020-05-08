var bg;
var tunnel;
var player;
var player_img;
function preload()
{
  bg=loadImage("images/Background.jpg");
  
  tree=loadImage("images/Tile_34.png");
  player_img=loadAnimation("images/run1.png","images/run2.png","images/run3.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight-250);
  player=createSprite(100,displayHeight-300);
  player.addAnimation("run",player_img);
  player.scale=0.5;
}

function draw() {
  background(bg);
  
  drawSprites();
}

function keyPressed() {
  if(keyCode===32)
  {
    player.velocityY=-12;

  }
  player.velocityY+=0.9;
}
