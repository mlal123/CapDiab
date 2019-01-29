class Sugar_Crystal {
  constructor(x,y, world) {
    this.body = Matter.Bodies.circle(x,y,5, {

      collisionFilter: {
        category: 4,
        mask: 5
      }

    });


    Matter.World.add(world, this.body);

  }
}
