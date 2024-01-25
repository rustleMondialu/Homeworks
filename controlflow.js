let userInput = prompt("Introduceti capacitatea cilindrica:");
console.log(userInput);

function calculate(userInput) {
  if (userInput <= 1600) {
    return Math.floor((userInput / 200) * 8);
  }
  if (userInput <= 2000) {
    return Math.floor((userInput / 200) * 22);
  }
  if (userInput <= 2600) {
    return Math.floor((userInput / 200) * 85);
  }
  if (userInput <= 3000) {
    return Math.floor((userInput / 200) * 171);
  }
  if (userInput > 3000) {
    return Math.floor((userInput / 200) * 345);
  }
}
console.log(calculate(userInput));
