function countvowels(str) {
  let count = {};
  let arr2 = str.toLowerCase();
  for (let i of arr2) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      if (count[i]) {
        count[i]++;
      } else {
        count[i] = 1;
      }
    }
  }
  return count;
}
const testCases = [
  {
    str: "hai",
    exp: {a:1,i:1},
  },
  {
    str: "HAI",
    exp: {a:1,i:1},
  },
  {
    str: "aaaAAA",
    exp: {a:6},
  },
  {
    str: "thhs",
    exp: {},
  },
];
function Testcountvowels() {
  testCases.forEach((testCase, index) => {
    let result = countvowels(testCase.str);
    console.log("Test Case:", index + 1);
    console.log("Test Input:", testCase.str);
    console.log("Test Excepted Result:", testCase.exp);
    console.log("The Actual Result:", result);
    console.log(
      "Test Result:",
      JSON.stringify(result) === JSON.stringify(testCase.exp)
        ? "Passed"
        : "Failed"
    );
    console.log("..........................................................");
  });
}
Testcountvowels();
