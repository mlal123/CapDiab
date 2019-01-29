
class Model {

  constructor() {

    this.food_items = [];
    this.sugar_crystals = [];

  // module aliases
  var Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;

  // create an engine
  this.engine = Engine.create();

  this.world = this.engine.world;

  // create two boxes and a grounds
  var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true} );

  // add all of the bodies to the world
  World.add(this.world, [ground]);

  // run the engine
  Engine.run(this.engine);

  // run the renderer
}

addFood_Item(w,h) {
  var food_item = new Food_Item(mouseX,mouseY,w,h, this.world);
  this.food_items.push(food_item);
}

addSugar_Crystal(x,y) {
  var sugar = new Sugar_Crystal(x,y,this.world);
  this.sugar_crystals.push(sugar);
}

getFoods() {
  return this.food_items;
}

getSugars() {
  return this.sugar_crystals;
}



}
