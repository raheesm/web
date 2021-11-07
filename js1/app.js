// var aage = 26;
// var aheight = 61;
// var bage = 24;
// var bheight = 70;
// var scorea = 0;
// var scoreb = 0;

// scorea = aage+(5*aheight);
// scoreb = bage+(5*bheight);

// if(scorea>scoreb){
//     console.log("A is the winner");
// }else{
//     console.log("B is the winner");
// }
 
// function findAge(yob){
//     var age = 2021 - yob;
//     return age;
// }
// findAge(1995);

var yob = [1995,1996,2010,1991,1800];
var ages = [];

function fillAges(){
    for(i=0;i<yob.length-1;i++){
        var age = 2021 - yob[i];
       ages.push(age);
    }
    console.log(ages);
}
fillAges();

function login(){
    ages.forEach(function(values){
        if(values>18){
            console.log("ready to login");
        }else{
            alert("sory your not adult"+values)
        }
    })
    console.log(ages);
}
login();