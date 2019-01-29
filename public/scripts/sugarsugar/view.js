class View {
  constructor() {

  }

  addFood_Item() {
    fill(204);
    rectMode(CENTER);
    rect(mouseX,mouseY,63,63);
  }

  addSugar_Crystal(x,y) {
    circle(x,y,3 )
  }

  showFoods( items ) {
    rectMode(CENTER);
    for (let item of items ) {
      var pos = item.body.position;
      push();
      translate(pos.x,pos.y)
      rotate(item.body.angle);
      rect(0,0,63,63);
      pop();
  }
}

  showSugars( items ) {
    for (let item of items ) {
      var pos = item.body.position;
      push();
      translate(pos.x,pos.y)
      rotate(item.body.angle);
      circle(0,0,5);
      pop();
    }
  }

}
