const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;
var block1,block2,block3,block4,block5,block6,block7;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(1000,400);
  
  engine = Engine.create();
  world = engine.world;

  ground2 = new Ground(500,390,1000,20);
  
  // tower 1
  ground1 = new Ground(390,300,250,10);
  
  // 1st line bottom one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  // 2nd line 
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  // 3rd line
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  // 4th line top one
  block16 = new Block(390,155,30,40);

  // 2nd tower

  ground3 = new Ground(700,200,200,10);

  block_1 = new Block(640,175,30,40);
  block_2 = new Block(670,175,30,40);
  block_3 = new Block(700,175,30,40);
  block_4 = new Block(730,175,30,40);
  block_5 = new Block(760,175,30,40);

  block_6 = new Block(670,135,30,40);
  block_7 = new Block(700,135,30,40);
  block_8 = new Block(730,135,30,40);

  block_9 = new Block(700,95,30,40);

  //polygon with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new SlingShot(this.polygon,{x:100,y:180});
  
}

function draw() {
  background(0,255,255);  

  textSize(20);
  fill("black");
  text("Drag the Hexagonal stone and release it, to launch it towards the blocks",180,40);

  Engine.update(engine);
  ground1.display();
  ground2.display();

  fill("darkblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("red");
  block13.display();
  block14.display();
  block15.display();

  fill("orange");
  block16.display();

  ground3.display();

  fill("yellow");
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();

  fill("purple");
  block_6.display();
  block_7.display();
  block_8.display();

  fill("green");
  block_9.display();

  //adding image
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

  drawSprites();
}

// to drag polygon with the mouse
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

// to release the polygon on mouse released
function mouseReleased(){
  slingShot.fly();
}

// on space key pressed attach polygon to the slingshot
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}