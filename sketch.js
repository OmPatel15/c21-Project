
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var ball;
var ground;
var radius = 40;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2	
		}




	

	//Create the Bodies Here.

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);
	
    ground=new Ground(400,550,width,20);

	leftSide= new Ground(600,500,20,120);

	rightSide= new Ground(700,500,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);
  ground.display();
  leftSide.display();
  rightSide.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:40,y:-50});
	}
}


