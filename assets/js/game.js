
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Query player
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter to 'FIGHT' or 'SKIP' to choose.");

    // Fight or skip

    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth -= playerAttack;
        console.log(playerName + " attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining.");

        // check enemy's health
        if (enemyHealth <0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable. //
        playerHealth -= enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining.");  
        
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } else if (promptFight === "SKIP" || promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Do you want to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! Goodbye!");
            playerMoney -= 2;
        } 
        // if no (false), ask again by running fight 
        else {
            fight();
        }
    }
};

fight ();
