
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,groundObj,lSide,rSide;
var world;
var radius = 40;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var ballO={
		isStatic: false,
		restirution: 0.45,
		friction: 0.01,
		density: 1.7,
	}
	ball = Bodies.circle(260, 100, radius/2, ballO);
	World.add(world, ball);

	groundObj = new grounderson(width/2, 670, width, 20);
	lSide = new grounderson(1100, 600, 20, 120);
	rSide = new grounderson(1350, 600, 20, 120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, radius, radius)
  lSide.display()
  rSide.display()
  groundObj.display()

  drawSprites();

}

function kp(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball. ballPosition, {x:85, y:-85})
	}
}