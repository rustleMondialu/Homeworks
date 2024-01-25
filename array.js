let initialValues = [1, 2, 3, "string", "otherstring", 3 > 1, 1 > 3];

let otherValues = [4, 5, 6, "strings", "happystring"];

initialValues.push(...otherValues);
console.log(initialValues);

const lastValues = initialValues.map((item) => {
  if (typeof item === "number") {
    return item + 2;
  }
  if (typeof item === "string") {
    return item + "happy coding";
  }
  if (typeof item === "boolean") {
    return (item = !item);
  }
});
console.log(lastValues);
