class Food_Item {
  constructor(x,y,w,h,world){
    this.world = world;
    this.body = Matter.Bodies.rectangle(x,y,w,h, {

      isStatic: true,
      collisionFilter: {
        category: 4,
        mask: 2
      }

    });
    Matter.World.add(this.world,this.body);

  }

};
