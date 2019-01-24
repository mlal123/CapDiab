
class Model {

  constructor() {

    this.food_items = [];

  // module aliases
  var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies;

  // create an engine
  this.engine = Engine.create();

  this.world = this.engine.world;

  // create a renderer
  this.render = Render.create({
      element: document.body,
      engine: this.engine
  });
  // create two boxes and a grounds
  var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true
 });

  var mouse = Matter.Mouse.create(this.render.canvas),
    mouseConstraint = Matter.MouseConstraint.create(this.engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: { visible: false },
            collisionFilter: { category: 10  }
        }
    });


  // add mouse interactivity
  World.add(this.world,mouseConstraint);

  // add all of the bodies to the world
  World.add(this.world, [ground]);

  // run the engine
  Engine.run(this.engine);

  // run the renderer
  Render.run(this.render);

}

addFood_Item(x,y,w,h) {
  var food_item = new Food_Item(x,y,w,h, this.world);
  this.food_items.push(food_item);
}

addSugar_Crystal(x,y) {
  var sugar = new Sugar_Crystal(x,y,this.world);
}

generateSugars() {
  for ( let food of this.food_items ) {
    var x = food.body.position.x;
    var y = food.body.position.y;
    this.addSugar_Crystal(
      x += random(-10,10),
      y += random(-10,10)
    );

  };
}

}
