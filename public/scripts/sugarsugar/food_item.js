class Food_Item {
  constructor(x,y,w,h,world){
    this.body = Matter.Bodies.rectangle(x,y,w,h, {

      isStatic: true

    });
    Matter.World.add(world,this.body);

  }
};
