function findMissingNumber(arr) {
  let a = Math.max(...arr);
  let b = Math.min(...arr);
  let brr = [];
  while (b <= a) {
    brr.push(b);
    b++;
  }
  return brr.filter((value) => !arr.includes(value));
}
const testCases = [
  { Input: [1, 2, 3, 4, 5, 6, 7, 9], Output: [8] },
  { Input: [5, 6, 8, 10], Output: [7, 9] },
  { Input: [1, 3, 5, 7], Output: [2, 4, 6] },
  { Input: [2, 3, 4, 6, 7, 8], Output: [1, 5] },
  { Input: [], Output: [] },
  { Input: [1], Output: [] },
  { Input: [100, 102, 105], Output: [101, 103, 104] },
];
function testfindMissingNumber() {
    testCases.forEach((testCase) => {
      const result = findMissingNumber(testCase.Input);
      console.log(`Input: ${testCase.Input}`);
      console.log(`Expected Output: ${testCase.Output}`);
      console.log(`Actual Output: ${JSON.stringify(result)}`); // Display as JSON string
      const passed = JSON.stringify(result) === JSON.stringify(testCase.Output);
      console.log(`Test Result: ${passed ? "Passed" : "Failed"}`);
      console.log("---------------------------------------------------");
    });
  }
testfindMissingNumber();
