class Food_Item {
  constructor(x,y,w,h,world){
    this.world = world;
    this.body = Matter.Bodies.rectangle(x,y,w,h, {

      isStatic: true,

    });
    Matter.World.add(this.world,this.body);

  }

  addSugar_Crystal(x,y) {
    var sugar = new Sugar_Crystal(x,y,this.world);
  }

  generateSugars() {

      var x = this.body.position.x;
      var y = this.body.position.y;
      this.addSugar_Crystal(
        x += random(-10,10),
        y += random(-10,10)
      );


  }
};
