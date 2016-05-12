"use strict";
  var RoboBattle = (function(Robattle){
  Robattle.Combatants = {};
    Robattle.Combatants.Battler = function(){
      this.chump = false;
      this.frame = null;
      this.spec = null;
      this.weapon = null;
      this.mod = null;
      this.integrity = 10;
      this.evasion = 0;
      this.damage = 0;

      this.setFrame = function(chosenFrame){
        this.frame = chosenFrame;
      };

      this.setSpec = function(chosenSpec){
        this.spec = chosenSpec;
      };
      
      this.setWeapon = function(chosenWeapon){
        this.weapon = chosenWeapon;
      };

      this.setMod = function(chosenMod){
        this.mod = chosenMod;
      };

      var whichRobot = "";
      this.toString = function() {
        if (this.chump) {
          whichRobot = "challenger";
        } else {
          whichRobot = "champ";
        }
        var output = [
          "The ",
          whichRobot,
          " enters the BattleDome, a(n) ",
          this.spec,
          " ",
          this.frame,
          " with a(n) ",
          this.weapon,
          ", modified with ",
          this.mod,
          "!"
        ].join("");
        return output;
      };

      this.totalIntegrity = function() {
        this.integrity += this.frame.intBonus;
        this.integrity += this.spec.intBonus;
        this.integrity += this.mod.intBonus;
      };

      this.totalEvasion = function(enemy) {
        this.evasion += this.frame.evasionBonus;
        this.evasion += this.weapon.evasionBonus;
        this.evasion += this.mod.evasionBonus;
        this.evasion += enemy.mod.enemyEvasion;
      };

      this.totalDamage = function(enemy) {
        this.damage += this.spec.damageBonus;
        this.damage += this.weapon.damage;
        this.damage += this.mod.damageBonus;
        this.damage += enemy.mod.enemyDamage;
        if (this.damage < 1) {
          this.damage = 1;
        }
      };
    };

    

    return Robattle;
  })(RoboBattle || {} );