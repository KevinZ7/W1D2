var input = process.argv.slice(2);

// var diceroll = function(numbers){
//   var numbersRolled = "Rolled " + numbers + " dice:";
//   console.log(numbersRolled);
//   for(var i = 0; i < Number(numbers); i++){
//     numbersRolled += (Math.floor(Math.random() * (7 - 1)) + 1) + ",";
//     console.log(numbersRolled);
//   }
//   return numbersRolled;
// }

// diceroll(input);

var numbersRolled = "Rolled " + input + " dice:";


  for(var i = 0; i < Number(input); i++){
    numbersRolled += (Math.floor(Math.random() * (7 - 1)) + 1) + ",";
    console.log(numbersRolled);
  }
