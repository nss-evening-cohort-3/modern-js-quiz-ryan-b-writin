"use strict";
var RoboBattle = (function(Robattle){
  Robattle.Garage = {};

  Robattle.Garage.Spec = function(){
    this.name = "junk";
    this.intBonus = 0;
    this.damageBonus = 0;
    this.toString = function(){
      return this.name;
    };
  };

  Robattle.Garage.Military = function(){
    this.name = "Military";
    this.damageBonus = 3;
  };
  Robattle.Garage.Military.prototype = new Robattle.Garage.Spec();

  Robattle.Garage.Industrial = function(){
    this.name = "Industrial";
    this.intBonus = 20;
  };
  Robattle.Garage.Industrial.prototype = new Robattle.Garage.Spec();

  return Robattle;
})(RoboBattle || {} );