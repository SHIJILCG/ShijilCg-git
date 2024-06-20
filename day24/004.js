function specifiedproperty(people, property) {
  let b = {};
  people.forEach((element) => {
    if (b[element[property]] === undefined) {
      b[element[property]] = [];
    }
    b[element[property]].push(element);
  });

  return b;
}
const people = [
  {
    a: [
      { name: "Alice", age: 30, mark: 100 },
      { name: "Bob", age: 24, mark: 101 },
      { name: "Charlie", age: 30, mark: 50 },
    ],
    property: "age",
    exp: {
      24: [{ name: "Bob", age: 24, mark: 101 }],
      30: [
        { name: "Alice", age: 30, mark: 100 },
        { name: "Charlie", age: 30, mark: 50 },
      ],
    },
  },
  {
    a: [
      { name: "Alice", age: 10, mark: 100 },
      { name: "Bob", age: 24, mark: 111 },
      { name: "Charlie", age: 30, mark: 50 },
    ],
    property: "name",
    exp: {
      Alice: [{ name: "Alice", age: 10, mark: 100 }],
      Bob: [{ name: "Bob", age: 24, mark: 111 }],
      Charlie: [{ name: "Charlie", age: 30, mark: 50 }],
    },
  },
  {
    a: [
      { name: "Alice", age: 30, mark: 100 },
      { name: "Bob", age: 24, mark: 101 },
      { name: "Charlie", age: 30, mark: 50 },
    ],
    property: "mark",
    exp: {
      50: [{ name: "Charlie", age: 30, mark: 50 }],
      100: [{ name: "Alice", age: 30, mark: 100 }],
      101: [{ name: "Bob", age: 24, mark: 101 }],
    },
  },
];
function Testspecifiedproperty() {
  people.forEach((value, index) => {
    let result = specifiedproperty(value.a, value.property);
    console.log("Test No:", index + 1);
    if (JSON.stringify(result) === JSON.stringify(value.exp)) {
      console.log("Test Passed");
      console.log("...............................................");
    } else {
      console.log("The Expected Result:", value.exp);
      console.log("The Actual Result:", result);
      console.log("...............................................");
    }
  });
}
Testspecifiedproperty();
