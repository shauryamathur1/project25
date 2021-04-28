
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	D1= new Dustbin(600,680,200,20);//to make first side of dusbin
	D2=new Dustbin(500,615,20,150);// to make second side of dusbin
    D3=new Dustbin(700,615,20,150);//to make third side of dusbin

   
	paper= new Paper (100,600,50);// paper is the class , paper hear mean ball

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);// means it should be in the middle of the image
  background("white");

  
  
  drawSprites();
 paper.display();// display paper,ground,d1,d2,d3
 ground.display();
 D1.display();
 D2.display();
 D3.display();
} 

function keyPressed()
{

	if(keyCode === UP_ARROW) // if we press up arrow
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400});

	}



}

