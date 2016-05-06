"use strict";
$(document).ready(function(){
  var RoboBattle = (function(Robattle){
    //initial values for view and selected robot
    $(".frame_select").show();
    var secondTime = false;

    //to move to players.js -----------------------------
    Robattle.Combatants = {};
    Robattle.Combatants.Battler = function(){
      this.chump = false;
      this.frame = null;
      this.spec = null;
      this.weapon = null;
      this.mod = null;
      this.integrity = 10;
    };

    Robattle.Combatants.Battler.prototype.setFrame = function(chosenFrame){
      this.frame = chosenFrame
      console.log("this", this);
    }

    Robattle.Combatants.Battler.prototype.setSpec = function(chosenSpec){
      this.spec = chosenSpec
      console.log("this", this);
    }

    Robattle.Combatants.Battler.prototype.setWeapon = function(chosenWeapon){
      this.weapon = chosenWeapon
      console.log("this", this);
    }

    Robattle.Combatants.Battler.prototype.setMod = function(chosenMod){
      this.mod = chosenMod
      console.log("this", this);
    }

    var champion = new Robattle.Combatants.Battler();
    var challenger = new Robattle.Combatants.Battler();
    challenger.chump = true;
    var which = champion;
    // end players.js ---------------------

    //on clicking a selection, set selection to player object
    $(".frame_link").click(function(e){
      var chosenFrame = $(this).attr('player');
      which.setFrame(chosenFrame);
    });

    $(".spec_link").click(function(e){
      var chosenSpec = $(this).attr('player');
      which.setSpec(chosenSpec);
    });

    $(".weapon_link").click(function(e){
      var chosenWeapon = $(this).attr('player');
      which.setWeapon(chosenWeapon);
    });

    $(".mod_link").click(function(e){
      var chosenMod = $(this).attr('player');
      which.setMod(chosenMod);
    });


    //function to switch selected robots
    Robattle.switchToChallenger = function (){
      $(".champOrChump").html("CHALLENGER");
      which = challenger;
    };

    //on click, move to next view. When finished with one robot, switch robots & start over
    $(".selection").click(function(e){
    var nextChoice = $(this).attr("next");
    var moveAlong = true;

    switch (nextChoice) {
      case "spec_select":
        // moveAlong = ($("#player-name").val() !== "");
        break;
      case "weapon_select":
        // moveAlong = (PlayerCharacter.class !== null);
        break;
      case "mod_select":
        // moveAlong = (PlayerCharacter.weapon !== null);
        break;
      case "battle_dome":
        // moveAlong = (PlayerCharacter.weapon !== null);
        break;
    };

    if (nextChoice === "battle_dome" && secondTime === true){
      $(".cardFrame2").html("Frame: "+challenger.frame)
      $(".cardSpec2").html("Spec: "+challenger.spec)
      $(".cardWeapon2").html("Weapon: "+challenger.weapon)
      $(".cardMod2").html("Mod: "+challenger.mod)
      $(".cardIntegrity2").html("Frame: "+challenger.integrity)

    };

    if (nextChoice === "battle_dome" && secondTime === false) {
      $(".choice").hide();
      $(".frame_select").show();
      Robattle.switchToChallenger();
      secondTime = true;
      $(".cardFrame").html("Frame: "+champion.frame)
      $(".cardSpec").html("Spec: "+champion.spec)
      $(".cardWeapon").html("Weapon: "+champion.weapon)
      $(".cardMod").html("Mod: "+champion.mod)
      $(".cardIntegrity").html("Frame: "+champion.integrity)
    } else if (moveAlong) {
      $(".choice").hide();
      $("." + nextChoice).show();
    }
    });


    return Robattle;
  })(RoboBattle || {} );
});