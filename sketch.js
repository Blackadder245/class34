const World=Matter. World
const Engine=Matter.Engine
const Bodies=Matter.Bodies
  
var world 
var engine
var ball
function setup() {
createCanvas(1000,600);

engine=Engine.create()
world=engine.world

var option={isStatic:true}
ball=Bodies.circle(200,400,40)
ground=Bodies.rectangle(500,580,1000,30,option)
World.add(world,ball)
World.add(world,ground)
box1=new Box(450,60)
box2=new Box(450,50)
box3=new Box(450,40)
box4=new Box(450,30)
box5=new Box(450,20)
var op={
bodyA:ball,
pointB:{x:150,y:100},
stiffness:1



}
lead=Matter.Constraint.create(op)
World.add(world,lead)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("blue"); 
  Engine.update(engine)
  rectMode(CENTER)
  ellipse(ball.position.x,ball.position.y,80,80)
  rect(ground.position.x,ground.position.y,1000,30)
  line(ball.position.x,ball.position.y,170,100)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
 
  drawSprites();

}
function mouseDragged(){
Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})

}
