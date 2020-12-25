/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which
   starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

function findLongName(NamE){
return (NamE[0] === "A") && (NamE.length > 7);
}

function longNameThatHasA() {
 return names.find(findLongName);
}
// var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatHasA());




// function findLongNameThatStartsWithA (names){
// var longNameThatStartsWithA = findLongName(names); 
// return names.find(findLongName(names));
// }
// console.log(longNameThatStartsWithA);

// var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

// console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
