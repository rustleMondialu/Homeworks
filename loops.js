1; //
numberArray = [1, 2, 3, 4, 5];
let sum = 0;
let arithmetic = 0;
for (let i = 0; i < numberArray.length; i++) {
  sum += numberArray[i];
}
arithmetic = sum / numberArray.length;
console.log(arithmetic);
2; //
myArray = [1, 2, 3, 4, 5, "string", 3 > 1];
let result = 0;

for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "number") {
    result += myArray[i];
  }
}

console.log(result);

3; //BONUS
let num1 = 0;
let num2 = 1;
let fibonaci = [num1, num2];
for (let i = 2; i < 20; i++) {
  let nextNum = num1 + num2;
  fibonaci.push(nextNum);
  num1 = num2;
  num2 = nextNum;
}
console.log(fibonaci);
