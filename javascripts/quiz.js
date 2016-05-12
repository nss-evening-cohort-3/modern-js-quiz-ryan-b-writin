"use strict";

  var RoboBattle = (function(Robattle){
    //initial values for view and selected robot
    $(".frame_select").show();
    var secondTime = false;
    var champion = new RoboBattle.Combatants.Battler();
    var challenger = new RoboBattle.Combatants.Battler();
    challenger.chump = true;
    var which = champion;


    //on clicking a selection, set selected value to player object
    $(".frame_link").click(function(e){
      var chosenFrame = $(this).attr('player');
      which.setFrame(new Robattle.Hangar[chosenFrame]());
    });

    $(".spec_link").click(function(e){
      var chosenSpec = $(this).attr('player');
      which.setSpec(new Robattle.Garage[chosenSpec]());
    });

    $(".weapon_link").click(function(e){
      var chosenWeapon = $(this).attr('player');
      which.setWeapon(new Robattle.Armory[chosenWeapon]());
    });

    $(".mod_link").click(function(e){
      var chosenMod = $(this).attr('player');
      which.setMod(new Robattle.Workbench[chosenMod]());
    });


    //function to switch selected robots
    Robattle.switchToChallenger = function (){
      $(".champOrChump").html("CHALLENGER");
      which = challenger;
    };

    //on click, move to next view. When finished with one robot, print robot info to DOM, switch robots & start over
    $(".selection").click(function(e){
    var nextChoice = $(this).attr("next");

    if (nextChoice === "battle_dome" && secondTime === true){
      champion.totalIntegrity();
      champion.totalDamage(challenger);
      champion.totalEvasion(challenger);
      challenger.totalIntegrity();
      challenger.totalDamage(champion);
      challenger.totalEvasion(champion);
      $(".cardFrame").html("Frame: "+champion.frame.name);
      $(".cardSpec").html("Spec: "+champion.spec.name);
      $(".cardWeapon").html("Weapon: "+champion.weapon);
      $(".cardMod").html("Mod: "+champion.mod);
      $(".cardIntegrity").html("Integrity: "+champion.integrity);
      $("#outputTarget").append(champion.toString(), "<br>");
      $(".cardFrame2").html("Frame: "+challenger.frame.name);
      $(".cardSpec2").html("Spec: "+challenger.spec.name);
      $(".cardWeapon2").html("Weapon: "+challenger.weapon);
      $(".cardMod2").html("Mod: "+challenger.mod);
      $(".cardIntegrity2").html("Integrity: "+challenger.integrity);
      $("#outputTarget").append(challenger.toString(), "<p>FIGHT!!!</p>");
    }

    if (nextChoice === "battle_dome" && secondTime === false) {
      $(".choice").hide();
      $(".frame_select").show();
      Robattle.switchToChallenger();
      secondTime = true;
    } else {
      $(".choice").hide();
      $("." + nextChoice).show();
        if (nextChoice === "battle_dome") {
          $(".reset").hide();
          $("#proceedBtn").show();
        }
    }
    });

    //on clicking the proceed button, combat is joined
    $("#proceedBtn").click(function(){
      champion.integrity -= challenger.damage;
      challenger.integrity -= champion.damage;
      $("#outputTarget").append(`<p>The champion hits for ${champion.damage}! The challenger hits for ${challenger.damage}!</p>`);
      if (challenger.integrity < 1) {
        $("#proceedBtn").hide();
        $("#outputTarget").html("Aaaaand the challenger is DOWN! The champion wins again!");
        $(".reset").show();
        $(".cardIntegrity2").html("DISABLED");
      } else if (champion.integrity < 1) {
        $("#proceedBtn").hide();
        $("#outputTarget").html("The champ goes down! CHAMP GOES DOWN! What an upset!");
        $(".reset").show();
        $(".cardIntegrity").html("DISABLED");
      } else {
        $(".cardIntegrity").html("Integrity: "+champion.integrity);
        $(".cardIntegrity2").html("Integrity: "+challenger.integrity);
      }
    });

    $(".reset").click(function(){
      $(".battle_dome").hide();
      $(".frame_select").show();
      secondTime = false;
      $(".champOrChump").html("CHAMPION");
      which = champion;
    });

    return Robattle;
  })(RoboBattle || {} );