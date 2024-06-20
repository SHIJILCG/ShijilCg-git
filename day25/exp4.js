function specified_property(arr, property) {
  let result = {};
  arr.forEach((elements) => {
    if (result[elements[property]] === undefined) {
      result[elements[property]] = [];
    }
    result[elements[property]].push(elements);
  });
  return result;
}
const peoples = [
  {
    arr: [
      { name: "Alice", age: 24 },
      { name: "Bob", age: 24 },
      { name: "Charlie", age: 30 },
      { name: "shijil", age: 70 },
      { name: "divin", age: 30 },
    ],
    property: "age",
    exp: {
      24: [
        { name: "Alice", age: 24 },
        { name: "Bob", age: 24 },
      ],
      30: [
        { name: "Charlie", age: 30 },
        { name: "divin", age: 30 },
      ],
      70: [{ name: "shijil", age: 70 }],
    },
  },
  {
    arr: [
      { name: "Alice", age: 24, BloodGrop: "A+" },
      { name: "Bob", age: 24, BloodGrop: "A-" },
      { name: "Charlie", age: 30, BloodGrop: "A+" },
      { name: "Shijil", age: 70, BloodGrop: "O+" },
      { name: "Divin", age: 30, BloodGrop: "AB+" },
    ],
    property: "BloodGrop",
    exp: {
      "A+": [
        { name: "Alice", age: 24, BloodGrop: "A+" },
        { name: "Charlie", age: 30, BloodGrop: "A+" },
      ],
      "A-": [{ name: "Bob", age: 24, BloodGrop: "A-" }],
      "O+": [{ name: "Shijil", age: 70, BloodGrop: "O+" }],
      "AB+": [{ name: "Divin", age: 30, BloodGrop: "AB+" }],
    },
  },
  {
    arr: [
      { name: "Alice", BloodGrop: "A+", Gender: "Women" },
      { name: "Bob", BloodGrop: "A-", Gender: "Men" },
      { name: "Charlie", BloodGrop: "A+", Gender: "Men" },
      { name: "Shijil", BloodGrop: "O+", Gender: "Men" },
      { name: "Divina", BloodGrop: "AB+", Gender: "Women" },
    ],
    property: "Gender",
    exp: {
      Women: [
        { name: "Alice", BloodGrop: "A+", Gender: "Women" },
        { name: "Divina", BloodGrop: "AB+", Gender: "Women" },
      ],
      Men: [
        { name: "Bob", BloodGrop: "A-", Gender: "Men" },
        { name: "Charlie", BloodGrop: "A+", Gender: "Men" },
        { name: "Shijil", BloodGrop: "O+", Gender: "Men" },
      ],
    },
  },
];
function Testspecified_property() {
  peoples.forEach((people, index) => {
    let result = specified_property(people.arr, people.property);
    if (JSON.stringify(result) === JSON.stringify(people.exp)) {
      console.log("Test", index + 1, "Passed");
    } else {
      console.log("Test", index + 1, "Failed");
      console.log("The Expected Result:", people.exp);
      console.log("The Actual Result:", result);
    }
  });
}
Testspecified_property();
