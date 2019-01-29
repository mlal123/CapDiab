class Food_Item {
  constructor(x,y,w,h,world){
    this.world = world;
    this.body = Matter.Bodies.rectangle(x,y,w,h, {

      isStatic: true,

    });
    Matter.World.add(this.world,this.body);

  }

};
