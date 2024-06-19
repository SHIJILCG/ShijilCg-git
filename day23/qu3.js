function slidingwindow(arr, k) {
  len = arr.legth;
  start = 0;
  let brr = [];
  let re = [];
  while (start < arr.length) {
    if (k <= arr.length) {
      brr.push(arr.slice(start, k));
      start = start + 1;
      k = k + 1;
    } else {
      break;
    }
  }
  brr.forEach((value) => {
    re.push(Math.max(...value));
  });
  return re;
}
const testCases = [
  { Input: [1, 3, -1, -3, 5, 3, 6, 7], k: 3, Output: [3, 3, 5, 5, 6, 7] },
  { Input: [1, 3, -1, -3, 5, 3, 6, 7], k: 2, Output: [3, 3, -1, 5, 5, 6, 7] },
];
function Testslidingwindow() {
  testCases.forEach((testCase, index) => {
    let result = slidingwindow(testCase.Input,testCase.k);
    console.log("Test Case:", index + 1);
    console.log("Test Input:", testCase.Input);
    console.log("Test K value:", testCase.k);
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
Testslidingwindow();
