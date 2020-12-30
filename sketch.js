
var fixedrect , movingrect;

function setup() 
{
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor = "red";
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "red";
}

function draw() 
{
  background(0,0,0);  

  movingrect.debug = true;
  fixedrect.debug = true;
 
  // horizontal distance between the two rectangles when both the rectangles are touching each other
  //fixedRect.width/2 + movingRect.width/2 === interms of x axis
  //distance between the centres of two rectangles): movingRect.x - fixedRect.x
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
 
  if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2 
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
  {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }

  else
  {
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  //console.log(movingrect.x-fixedrect.x)
  //movingRect.x - fixedRect.x = fixedRect.width/2 +movingRect.width/2
  //know the objects have collided should be;

  drawSprites();
}