// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function MultipliedByHun(number) {
  return number * 100;
}
var numberMultipliedByHun = numbers.map(MultipliedByHun);
console.log(numberMultipliedByHun);


var numberMultipliedByHun = numbers.map(function MultipliedByHun(number) {
  return number * 100;
});
console.log(numberMultipliedByHun);

var numberMultipliedByHun = numbers.map(function(number){
    return number * 100;
});
console.log(numberMultipliedByHun);

var numberMultipliedByHun = numbers.map((number)=>{
  return number * 100;
});
console.log(numberMultipliedByHun);

var numberMultipliedByHun = numbers.map(number => number * 100);
console.log(numberMultipliedByHun);

 