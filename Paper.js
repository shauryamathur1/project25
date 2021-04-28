class Paper 
{
  constructor(x, y,radius) 
  {
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
    }
    
    this.body = Bodies.circle(x, y, radius, options);// make the body circle 
    this.radius = radius;
    this.image=loadImage("paper.png")
    
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;//pos mean in this position
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill(255);
    image(this.image,0, 0, this.radius);
    pop();
  }
};
