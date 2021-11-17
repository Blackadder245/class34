class Box{
constructor(x,y){
  this.box=Bodies.rectangle(x,y,100,100)
  World.add(world,this.box)
}
display(){
    push()
    translate(this.box.position.x,this.box.position.y)
    
    rotate(this.box.angle)
    
    rect(0,0,100,100)
    pop()
}
 
}