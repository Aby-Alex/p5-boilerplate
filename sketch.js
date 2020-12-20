const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myengine,myworld;
var ground;
function setup() {
  createCanvas(400,400);
//  createSprite(400, 200, 50, 50);
myengine=Engine.create();
myworld=myengine.world;
var object_options = {
  isStatic : true
}

ground=Bodies.rectangle(200,380,10,50,object_options);
World.add(myworld,ground);
console.log(ground);
console.log(ground.type);
console.log(ground.position.x);
}

function draw() {
  background("black");  
  Engine.update(myengine);
 rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}