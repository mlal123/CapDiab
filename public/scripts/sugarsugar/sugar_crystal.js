class Sugar_Crystal {
  constructor(x,y, world) {
    this.body = Matter.Bodies.circle(x,y,random(3,8), {


    });


    Matter.World.add(world, this.body);
  }
}
