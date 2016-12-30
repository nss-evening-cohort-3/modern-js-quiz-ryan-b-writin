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

      this.setFrame = chosenFrame => {
        this.frame = chosenFrame;
      };

      this.setSpec = chosenSpec => {
        this.spec = chosenSpec;
      };
      
      this.setWeapon = chosenWeapon => {
        this.weapon = chosenWeapon;
      };

      this.setMod = chosenMod => {
        this.mod = chosenMod;
      };

      let whichRobot = "";
      this.toString = () => {
        if (this.chump) {
          whichRobot = "challenger";
        } else {
          whichRobot = "champ";
        }
        let output = [
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

      this.totalIntegrity = () => {
        this.integrity += this.frame.intBonus;
        this.integrity += this.spec.intBonus;
        this.integrity += this.mod.intBonus;
        this.integrity += Math.floor(Math.random() * 30);
      };

      this.totalEvasion = enemy => {
        let evasionMultiplier = 0;
        evasionMultiplier += this.frame.evasionBonus;
        evasionMultiplier += this.weapon.evasionBonus;
        evasionMultiplier += this.mod.evasionBonus;
        evasionMultiplier += enemy.mod.enemyEvasion;
        this.evasion = Math.floor(Math.random() * (evasionMultiplier * 15));
        if (this.evasion > 90) {
          this.evasion = 90;
        }
      };

      this.totalDamage = enemy => {
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