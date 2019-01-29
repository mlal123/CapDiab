var gameModel;
var gameView;

function setup() {
    createCanvas(600,600);
    gameModel = new Model();
    gameView = new View();

}

function draw() {
  var sugars = gameModel.getSugars();
  var foods = gameModel.getFoods();
  clear();
  if ( frameCount % 60 == 0) {
    for ( let item of foods ) {
      var pos = item.body.position;
      gameModel.addSugar_Crystal(pos.x, pos.y);
    }
  }
  gameView.showSugars( sugars );
  gameView.showFoods( foods );

}

function doubleClicked() {
  this.addFood_Item();
}

function render() {

}













function addFood_Item() {
  gameModel.addFood_Item(63,63)
  gameView.addFood_Item();
}
