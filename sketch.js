var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, redBoxBottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	redBoxBottom=createSprite(400, 645, 200, 20);
	redBoxBottom.shapeColor=color(255,0,0);
	redBoxRight=createSprite(310, 600, 20, 100);
	redBoxRight.shapeColor=color(255,0,0);
	redBoxLeft=createSprite(490, 600, 20, 100);
	redBoxLeft.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	var packageOptions = {
		restitution:0.4 ,
		isStatic:true
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageOptions);
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	redBoxBottom = Bodies.rectangle(400, 500, 200, 20);
	rect(redBoxBottom.position.x, 500, 200, 20);
	World.add(world, redBoxBottom);
	//console.log(redBoxBottom);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  if(keyWentDown(DOWN_ARROW) && packageBody.position.y == 200)
  {
	Matter.Body.setStatic(packageBody, false);
  }

  

  drawSprites();
}