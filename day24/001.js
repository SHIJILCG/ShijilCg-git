function olderones(user) {
  let brr = [];
  user.forEach((values) => {
    values.age > 25 ? brr.push(values.name) : -1;
  });
  return brr;
}
const users = [
  {
    a: [
      { name: "Alice", age: 24 },
      { name: "Bob", age: 27 },
      { name: "Charlie", age: 30 },
      { name: "", age: 30 },
      { name: "Shijil", age: 70 },
    ],
    exp: ["Bob", "Charlie", "", "Shijil"],
  },
  {
    a: [
      { name: "Alice", age: 24 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 10 },
    ],
    exp: [],
  },
  {
    a: [
      { name: "Alice", age: 0 },
      { name: "Bob", age: 0 },
    ],
    exp: [],
  },
];
function Testolderones() {
  users.forEach((value) => {
    let result = olderones(value.a);
    console.log("The Input Array:", value.a);
    if (JSON.stringify(result) === JSON.stringify(value.exp)) {
      console.log("Test Passed");
      console.log("...............................................");
    } else {
      console.log("The Actual Result:", result);
      console.log("...............................................");
    }
  });
}
Testolderones();
