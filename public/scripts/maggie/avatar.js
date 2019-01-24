"use strict";
Object.defineProperty(exports, "__esModule", {value: true});

class Avatar {
  constructor(){
    this.diameter = 30;
  }

  display(){
    ellipse(50,50, this.diameter, this.diameter);
  }
}

exports.Avatar = Avatar;
