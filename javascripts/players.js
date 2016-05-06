"use strict";
var RoboBattle = (function(Robattle){
    Robattle.Combatants = {};
    Robattle.Combatants.Battler = function(){
      this.challenger = false;
      this.frame = null;
      this.spec = null;
      this.weapon = null;
      this.mod = null;
      this.integrity = 10;
    };

  // var champion = new robo_battle.Combatants.Battler();
  // console.log("champ", champion);

    return Robattle;
  })(RoboBattle || {} );