"use strict";
var RoboBattle = (function(Robattle){
  Robattle.Armory = {};

  Robattle.Armory.Weapon = function(){
    this.name = "arms"
    this.damage = 0;
    this.evasionBonus = 0;
    this.toString = function(){
      return this.name;
    };
  };

  Robattle.Armory.Airgun = function(){
    this.name = "Airgun";
    this.damage = 1;
    this.evasionBonus = 2;
  }
  Robattle.Armory.Airgun.prototype = new Robattle.Armory.Weapon();

  Robattle.Armory.Blade = function(){
    this.name = "Blade";
    this.damage = 2;
    this.evasionBonus = 1;
  }
  Robattle.Armory.Blade.prototype = new Robattle.Armory.Weapon();

  Robattle.Armory.PulseBeam = function(){
    this.name = "Pulse Beam";
    this.damage = 3;
  }
  Robattle.Armory.PulseBeam.prototype = new Robattle.Armory.Weapon();

  Robattle.Armory.Bludgeon = function(){
    this.name = "Bludgeon";
    this.damage = 4;
    this.evasionBonus = -1;
  }
  Robattle.Armory.Bludgeon.prototype = new Robattle.Armory.Weapon();

  Robattle.Armory.Flamethrower = function(){
    this.name = "Flamethrower";
    this.damage = 5;
    this.evasionBonus = -2;
  }
  Robattle.Armory.Flamethrower.prototype = new Robattle.Armory.Weapon();

  Robattle.Armory.Cannon = function(){
    this.name = "Cannon";
    this.damage = 6;
    this.evasionBonus = -100;
  }
  Robattle.Armory.Cannon.prototype = new Robattle.Armory.Weapon();

  return Robattle;
})(RoboBattle || {} );