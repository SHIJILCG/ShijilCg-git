function subarray(arr) {
  let brr = [];
  let sum = 0;
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr[0]];
  for (let start = 0; start < arr.length; start++) {
    for (let end = start + 1; end <= arr.length; end++) {
      brr.push(arr.slice(start, end));
    }
  }
  brr.forEach((value) => {
    let result = value.reduce((total, value) => total + value);
    if (result >= sum) {
         re = value;
        sum=result;
    }
  });
  return re;
}
const testCases = [
  { Input: [1, 3, -5, -6, -6], Output: [1,3] },
  { Input: [], Output: [] },
  { Input: [1], Output: [1] },
  { Input: [6, -1, -4, -5, -5, -6], Output: [6] },
  { Input: [0], Output: [0] },
];
function Testsubarray() {
  testCases.forEach((testCase, index) => {
    let result = subarray(testCase.Input);
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
Testsubarray();
