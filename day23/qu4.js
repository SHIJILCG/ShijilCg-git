function duplicatesubsets(arr) {
  let brr = [];
  let result = [];
  for (let start = 0; start < arr.length; start++) {
    for (let end = start + 1; end <= arr.length; end++) {
      brr.push(arr.slice(start, end));
    }
  }
  let resultset = new Set(brr.map(JSON.stringify));
  return (result = Array.from(resultset).map(JSON.parse));
}
const testCases = [
  {
    Input: [3, 7, 9],
    Output: [[3], [3, 7], [3, 7, 9], [7], [7, 9], [9]],
  },
  { Input: [1, 2, 2], Output: [[1], [1, 2], [1, 2, 2], [2], [2, 2]] },
];
function Testduplicatesubsets() {
  testCases.forEach((testCase, index) => {
    let result = duplicatesubsets(testCase.Input);
    console.log("Test Case:", index + 1);
    console.log("Test Input:", testCase.Input);
    console.log("Test Excepted Result:", testCase.Output);
    console.log("The Actual Result:", result);
    console.log(
      "Test Result:",
      JSON.stringify(result) === JSON.stringify(testCase.Output)
        ? "Passed"
        : "Failed"
    );
    console.log("..........................................................");
  });
}
Testduplicatesubsets();
