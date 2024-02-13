const myArray = [1, 2, 3, 4, 5, 6, "8", "string"];

const evenNumbers = myArray.every((element) => {
  return typeof element === "number" && element % 2 === 0;
});
console.log(evenNumbers);

myArray.forEach((element) => {
  console.log(element);
});

const initialValue = 0;
const sumWith = myArray.reduce((accumulator, currentValue) => {
  if (typeof currentValue === "number") {
    return accumulator + currentValue;
  }
  return accumulator;
}, initialValue);
console.log(sumWith);
