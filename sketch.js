
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, ball2, ball3, ball4, ball5, roof;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(700,320,70,70);
    ball2 = new Ball(920,320,70,70);
    ball3=new Ball(700,240,70,70);
    ball4=new Ball(920,240,70,70);
    ball5=new Ball(810,160,70,70);
	roof = new Roof(600,height,1200,220);
	rope1=new rope(ball1.body,roof.body,-ballDiameter*2,0)
	rope2=new rope(ball2.body,roof.body,-ballDiameter*2,0)
	rope3=new rope(ball3.body,roof.body,-ballDiameter*2,0)
	rope4=new rope(ball4.body,roof.body,-ballDiameter*2,0)
	rope5=new rope(ball5.body,roof.body,-ballDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



