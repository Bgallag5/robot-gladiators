var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

////////////////////////////////////////////////////FIGHT FUNCTION////////////////////////////////////////////////////////////////////////////       

var fight = function(enemyName) {
    while(enemyHealth > 0 && enemyHealth >0){
//alerts players that they are starting the round
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = Math.max(playerMoney - 10, 0);
      console.log("playerMoney", playerMoney);
      break;
    }
}

    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
var damage =  randomNumber(playerAttack - 3, playerAttack)
enemyHealth = Math.max(0, enemyHealth - damage)      //Math.max selsects the largest/mac value. if 0 is included, the lowest a variable can go is 0.
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
  playerMoney= playerMoney + 20;
  break;
} 
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
// remove player's health by subtracting the amount set in the enemyAttack variable

var damage = randomNumber(enemyAttack - 3, enemyAttack);
playerHealth = Math.max(0, playerHealth - damage)

console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
  break;
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
}
};

////////////////////////////////////////////////////END FIGHT FUNCTION////////////////////////////////////////////////////////////////////////////       

////////////////////////////////////////////////////START GAME FUNCTION////////////////////////////////////////////////////////////////////////////       

var startGame = function(){
// reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round" + ( i + 1 ) );
        var pickedEnemyName = enemyNames[i];
    enemyHealth = randomNumber(40, 60);
    fight(pickedEnemyName);
    
    if (playerHealth > 0 && i < enemyNames.length -1){  // this says 'if we're not at the last enemy/object in the array'
        var storeConfirm = window.confirm("Go to the Shop?");
        if (storeConfirm){
        shop();
    }
    }
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    endGame();
//play again
startGame();
  };

  ////////////////////////////////////////////////////END GAME FUNCTION////////////////////////////////////////////////////////////////////////////       
  var endGame = function(){
      if (playerHealth>0){
          alert("Congrats! You survived the game with a score of " + playerMoney);
      }
      else if (playerHealth<0){
          alert("You Suck, Try Harder");
      }

      var playAgainConfirm = window.confirm("Do you want to play again?");
      if (playAgainConfirm){
          startGame();
      }
      else{
          alert("Thanks for playing, come again!");
      }
  }

  ////////////////////////////////////////////////////  SHOP   ////////////////////////////////////////////////////////////////////////////       

  var shop = function(){
      var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Enter 'REFILL' 'UPGRADE' or 'LEAVE' ");
  
      switch(shopOptionPrompt){
          case "refill": 
          if (playerMoney >= 7){
          alert("Refilled player health by 20hp. -7 dollars.");
          playerHealth = playerHealth + 20;
          playerMoney = playerMoney - 7;
          }
          else {
              alert("You don't have enough money");
          }
          break;
          
          case "upgrade": 
          if (playerMoney >= 7){
          alert("Upgraded attack by 6. -7 dollars");
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 7;
          }
          else{
              alert("You don't have enough money")
          }
          break;
          
          case "leave": alert("Leaving the Store");
          break;
          default: alert("Choose a valid option.");
          shop();       //recall the shop function to shop again if a non choice was selected 
          break;
      } 
  
    };

      ////////////////////////////////////////////////////  RANDOM    ////////////////////////////////////////////////////////////////////////////       
    let randomNumber = function(min, max){
      let value = Math.floor(Math.random() * ( max - min + 1) + max);
      return value;
    };

  // start the game when the page loads
startGame();