const cars = ["BMW", "Volvo", "Mini"];
for (let x of cars) {
  console.log(x);
}
let lang = "Javacsript";
for (let x in lang) {
  console.log(x);
}
////////////////////////////////////////////////////////////////
const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "banana",
];
const value = fruits.reduce((acc, fruit) => {
  if (!acc[fruit]) {
    acc[fruit] = 1;
  } else {
    acc[fruit]++;
  }
  return acc;
}, {});
console.log(value);
///////////////////////////////////////
