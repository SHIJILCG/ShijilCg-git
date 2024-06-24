function olderthan25(arr) {
  let brr = [];
  arr.forEach((value) => {
    if (value.age > 25) brr.push(value.name);
  });
  return brr;
}
const peoples = [
  {
    arr: [
      { name: "Alice", age: 24 },
      { name: "Bob", age: 27 },
      { name: "Charlie", age: 30 },
    ],
    exp: ["Bob", "Charlie"],
  },
  {
    arr: [
      { name: "Alice", age: 0 },
      { name: "Bob", age: 0 },
      { name: "Charlie", age: 0 },
    ],
    exp: [],
  },
  {
    arr: [
      { name: "Alice", age: 27 },
      { name: "Bob", age: 47 },
      { name: "Charlie", age: 30 },
    ],
    exp: ['Alice', 'Bob', 'Charlie'],
  },
  {
    arr: [
      { name: "", age: 27 },
      { name: "Bob", age: 17 },
      { name: "Charlie", age: 20 },
    ],
    exp: [""],
  },
];
function Testolderthan25() {
  peoples.forEach((people, index) => {
    let result = olderthan25(people.arr);
    if (
      result.length === people.exp.length && result.every((value, ind) =>value === people.exp[ind])
    ) {
      console.log("Test", index + 1, "Passed");
    } else {
      console.log("Test", index + 1, "Failed");
      console.log("The Expected result:", people.exp);
      console.log("The Actual Result:", result);
      console.log("..................................");
    }
  });
}
Testolderthan25();
