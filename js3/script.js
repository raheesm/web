// var info = {
//     house: 'muyyoth',
//     mobile: 9633093671,
//     yob: 1995,
//     job: 'Front End Developer'

// };

// var Person = function (house, mobile, yob, job){
//    {
//         this.house = house;
//         this.mobile = mobile;
//         this.yob = yob;
//         this.job = job;
//         this.calculateAge = function () {
//             console.log(2021 - this.yob);
//         };
//     }
// }

// var rahees = new Person('muyyoth',9633093671, 1995, 'webdesigner');

// rahees.calculateAge();

// var rahil = new Person('muyyoth', 9633093671, 1997, 'accountent');

// rahil.calculateAge();

// const me = 'rahees';
// console.log(typeof me);
// console.log(info);

// constructor

// function data(house, mobile, yob, job) {
//         this.house = house,
//         this.mobile = mobile,
//         this.yob = yob,
//         this.job = job,
//             this.getSummery = function () {
//             return `${this.house} with a mobile ${this.mobile}born in ${this.yob}work as ${this.job}`;
//         }
// }

// data.prototype.name = "rahees";
// data.prototype.getAge = function () {
//     let year = new Date().getFullYear();
//     return year-this.yob;
// }

// const std1 = new data('muyyoth', 9633093671, 1995, 'webdesigner');
// const std2 = new data('manzx', 9634393671, 1997, 'webdev');
// std2.color = "blue";
// let std =Object.keys({ std1 })[0];

// console.log(std,'lives in '+std1.getSummery());
// console.log(std2.getAge());
// console.log(std2);

// var years = [1990, 1905, 1907, 1997, 2015];

// function result(arr,fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2021 - el;
// }

// var ages = result(years, calculateAge);

// function isAdult(el) {
//     if (el >= 18) {
//         return "adults";
//     } else {
//         return "teen";
//    }
// }
// var adults = result(ages, isAdult);
// console.log(adults);
// console.log(ages);

// function welcome(name) {
//     console.log("welcome" + name);
// }

// function random() {
//     var score = Math.random() * 10;
//     console.log(score>5);
// }
// random();
// welcome("rahees");
// prompt("hello");


// dom  manipulation

var score, roundScore, activePlayer, dice,isPlaying;

init();




document.querySelector('.button-roll').addEventListener('click', function () {

    if (isPlaying) {
        dice = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".dice-value").textContent = dice;
    
    
        if (dice !== 1) {
            roundScore += dice;
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
   
    

    //check if the player wins the game
    if (scores[activePlayer - 1] >= 20) {
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