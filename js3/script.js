var years = [1995, 1908, 2000, 2009, 1999];


function arrayFn(ar, fn) {
    var arRes = [];
    for (i = 0; i < ar.length; i++){
        arRes.push(fn(ar[i]));
    }
    return arRes;
}

function findAge(dob) {
   
        return 2021 - dob;
    
}

var ages=arrayFn(years, findAge);
console.log(ages);

function calfullAge(el) {
    return el >= 18;
}
var fullAge = arrayFn(ages, calfullAge);
console.log(fullAge);
// function fullAges() {
//     for (i = 0; i < years.length; i++){
//         var age = 2021 - years[i];
     
//       ages.push(age);
         
//      }
//     for (i = 0; i < years.length; i++){
//         fullAges = ages[i] > 18;
//         console.log(fullAges);
//         fullAr.push(fullAges);
        
//     }
//     console.log(fullAr,ages);
// }
// fullAges();
