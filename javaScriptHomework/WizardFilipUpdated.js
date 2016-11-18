/*var currentExp = parseInt(prompt("Enter Current XP"));
//var neededExp = 100-currentExp%100+currentExp; ova i red 3 se ako sakas samo da vnesuvas currentExp a neededExp i winExp da si gi imaat odnapred utvrdenite vrednosti
//var winExp = 75;
var neededExp = parseInt(prompt("Enter Needed XP"));
var winExp = parseInt(prompt("Enter Win XP"));

function willLevelUp(currentExp,neededExp,winExp){
    var levelUp = currentExp+winExp;
    var outcome;  
    if (levelUp<neededExp){
        var expNeeded = neededExp - levelUp;
        outcome= "You did not manage to level up,you need "+expNeeded+"  more to be able to learn powerful new spells."; 
    }
    else { 
        outcome= "Congratulations you just leveled up!";
    }
    return outcome;         
}



alert(willLevelUp(currentExp,neededExp,winExp));
*/
//ova podole e od cas update

function willLevelUp(currentExp, neededExp, winExp){
    return currentExp + winExp >= neededExp;
}

function alertUser(shouldAlert, message){
    if(shouldAlert){
        alert(message);
        return true;
    } else return false;
}


if(!alertUser(willLevelUp(125, 160, 40), "You have leveled up!"));{
   (alertUser(!willLevelUp(125, 260, 40), "You have not leveled up!");



