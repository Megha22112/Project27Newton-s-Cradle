
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,bob1,bob2,bob3,bob4,bob5;
var bobDiameter;
var roof;
var rope1,rope2, rope3, rope4, rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 40;
	bob1 = new Bob(100,600,100)
	bob2 = new Bob(300,600,100)
	bob3 = new Bob(500,600,100)
	bob4 = new Bob(700,600,100)
	bob5 = new Bob(800,600,100)
    roof = new Roof(350,100,450,50);
	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*4, 0)
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*2, 0)
	rope3 = new Rope(bob3.body, roof.body, 0, 0)
	rope4 = new Rope(bob4.body, roof.body, bobDiameter*2, 0)
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*4, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGray");

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();


  drawSprites();
 
}



