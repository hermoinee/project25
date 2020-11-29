
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   ground = new Ground(400,780,800,20);
   ball=new Ball(220,760,30);
   dustbin=new Dustbin(600,780);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lighGtrey");
  ground.display();
  ball.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW)
	
	{ Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}); } 
}



