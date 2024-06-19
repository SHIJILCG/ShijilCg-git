function arraystring(arr) {
  let result = arr.map((value) => value.length);
  return result;
}
let testCase = [
  {
    arr: ["hai", "oi", "kooi"],
    exp: [3, 2, 4],
  },
  {
    arr: ["a", "b", "c"],
    exp: [1, 1, 1],
  },
  {
    arr: ["ja"],
    exp: [2],
  },
];

function Testarraystring() {
  testCase.forEach((testCases, index) => {
    let result = arraystring(testCases.arr);
    console.log("The Test No:", index + 1);
    console.log("Test Input:", testCases.arr);
    console.log("The Expected Result:", testCases.exp);
    console.log("The Actual Result:", result);
    console.log(
      "The Test Result:",
      JSON.stringify(testCases.exp) === JSON.stringify(result)
        ? "Passed"
        : "Failed"
    );
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  });
}
Testarraystring();
