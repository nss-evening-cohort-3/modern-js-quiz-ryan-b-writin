"use strict";
var RoboBattle = (function(Robattle){
  Robattle.Workbench = {};

  Robattle.Workbench.Mod = function(){
    this.name = "jailbroken";
    this.damageBonus = 0;
    this.intBonus = 0;
    this.evasionBonus = 0;
    this.enemyEvasion = 0;
    this.enemyDamage = 0;
    this.toString = function(){
      return this.name;
    };
  };

  Robattle.Workbench.HeavyArms = function(){
    this.name = "Heavy Arms";
    this.damageBonus = 2;
  };
  Robattle.Workbench.HeavyArms.prototype = new Robattle.Workbench.Mod();

  Robattle.Workbench.FasterProcessor = function(){
    this.name = "Faster Processor";
    this.damageBonus = 1;
    this.evasionBonus = 1;
  };
  Robattle.Workbench.FasterProcessor.prototype = new Robattle.Workbench.Mod();

  Robattle.Workbench.Boosters = function(){
    this.name = "Boosters";
    this.evasionBonus = 2;
  };
  Robattle.Workbench.Boosters.prototype = new Robattle.Workbench.Mod();

  Robattle.Workbench.SensorScrambler = function(){
    this.name = "Sensor Scrambler";
    this.enemyDamage = -2;
  };
  Robattle.Workbench.SensorScrambler.prototype = new Robattle.Workbench.Mod();

  Robattle.Workbench.TargetingComputer = function(){
    this.name = "Targeting Computer";
    this.enemyEvasion = -2;
  };
  Robattle.Workbench.TargetingComputer.prototype = new Robattle.Workbench.Mod();

  Robattle.Workbench.ThickPlating = function(){
    this.name = "Thick Plating";
    this.intBonus = 50;
  };
  Robattle.Workbench.ThickPlating.prototype = new Robattle.Workbench.Mod();

  return Robattle;
})(RoboBattle || {} );