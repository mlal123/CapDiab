class Sugar_Crystal {
  constructor(x,y, world) {
    this.body = Matter.Bodies.circle(x,y,3, {

      collisionFilter: { category: 10 }

    });


    Matter.World.add(world, this.body);
  }
}
