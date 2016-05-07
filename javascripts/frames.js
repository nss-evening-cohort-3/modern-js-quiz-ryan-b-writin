"use strict";
var RoboBattle = (function(Robattle){
  Robattle.Hangar = {};

  Robattle.Hangar.Frame = function() {
    this.name = "Scrap";
    this.intBonus = 0;
    this.evasionBonus = 0;
    this.allowedWeapons = "light";
    this.toString = function(){
      return this.name;
    };
  };

  Robattle.Hangar.Android = function(){
    this.name = "Android";
    this.intBonus = 20;
    this.evasionBonus = 1;
    this.allowedWeapons = "medium";
  };
  Robattle.Hangar.Android.prototype = new Robattle.Hangar.Frame();

  Robattle.Hangar.Drone = function(){
    this.name = "Drone";
    this.intBonus = 10;
    this.evasionBonus = 2;
  };
  Robattle.Hangar.Drone.prototype = new Robattle.Hangar.Frame();

  Robattle.Hangar.Grunt = function(){
    this.name = "Grunt";
    this.intBonus = 30;
    this.allowedWeapons = "heavy";
  };
  Robattle.Hangar.Grunt.prototype = new Robattle.Hangar.Frame();

  return Robattle;
})(RoboBattle || {} );