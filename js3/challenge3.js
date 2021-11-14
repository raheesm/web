// challenge No: 1 - if a player rolles number 6 one after another he looses his entire score he had BeforeUnloadEvent;
// challenge No: 2 - lets the player to choose winnigh Score by their own from an input field
// challenge No: 3 - add 2 dice and if one of the dice shows 1 change player
var score, roundScore, activePlayer, dice,isPlaying;

init();

var lastDice;


document.querySelector('.button-roll').addEventListener('click', function () {

    if (isPlaying) {
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById("dice-1").textContent = dice1;
        document.getElementById("dice-2").textContent = dice2;
    
        if (dice1 !== 1 && dice2 !==1) {
            roundScore += dice1+dice2;
            document.querySelector("#current_" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
    
    
        }
    }

})



document.querySelector(".button-hold").addEventListener('click', function () {
    if (isPlaying) {
        //Add Current score to Global
    scores[activePlayer - 1] += roundScore;

    //update the UI
    document.querySelector("#score_" + activePlayer).textContent = scores[activePlayer - 1];
   
    var input = document.querySelector(".final-score").value;
        if (input) {
            var winningScore = input;
        } else {
            winningScore = 100;
     }

    //check if the player wins the game
    if (scores[activePlayer - 1] >= winningScore) {
        isPlaying = false;
        document.querySelector(".player-" + activePlayer).textContent = "Winner";
        document.querySelector(".player-" + activePlayer).classList.remove('active');
    } else {
        // toggle to next player
        nextPlayer();
    }

}

});
document.querySelector(".button-new").addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 1;
    isPlaying = true;
    document.getElementById("score_1").textContent = '0';
    document.getElementById("score_2").textContent = '0';
    document.getElementById("current_1").textContent = '0';
    document.getElementById("current_2").textContent = '0';
    document.querySelector(".player-1").textContent = "Player 1";
    document.querySelector(".player-2").textContent = "Player 2";
    document.querySelector(".panel-1").classList.remove("active");
    document.querySelector(".panel-1").classList.add("active");
    document.querySelector(".panel-2").classList.remove("active");
  
}

function nextPlayer() {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;

    roundScore = 0;
    document.getElementById("current_2").textContent = '0';

    document.getElementById("current_1").textContent = '0';

    document.querySelector(".panel-1").classList.toggle("active");
    document.querySelector(".panel-2").classList.toggle("active");
}