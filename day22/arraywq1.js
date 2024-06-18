//////array  with continue values equal to target
function find_pairs_with_sum(arr, target) {
  let pairs = [];
  let brr = [];
  let brr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      pairs.push(arr.slice(i, j));
    }
  }
  pairs.forEach((pair) => {
    brr = pair.reduce((total, value) => total + value, 0);
    if (brr === target) {
      brr2.push(...pair);
    }
  });

  return brr2;
}
const testcases = [
  { Input: [1, 2, 5, 5, 6, 6, 7], target: 4, Output: [] },
  { Input: [1], target: 1, Output: [1] },
  { Input: [], target: 0, Output: [] },
  { Input: [1, 1, 2, 3], target: 4, Output: [1, 1, 2] },
  { Input: [0], target: 1, Output: [] },
];

function Testtargetequalto() {
  testcases.forEach((testcase) => {
    const result = find_pairs_with_sum(testcase.Input, testcase.target);
    console.log("Test Input:", testcase.Input);
    console.log("Test Target:", testcase.target);
    console.log("Expected Output:", testcase.Output);
    console.log("Actual Output:", result);
    console.log(
      "Test Result:",
      JSON.stringify(testcase.Output) === JSON.stringify(result)
        ? "Passed"
        : "Failed"
    );
    console.log(
      ".................................................................."
    );
  });
}

Testtargetequalto();
