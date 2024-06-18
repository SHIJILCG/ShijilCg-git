function sortArrayByParity(arr){
    let arr1=[];
    let arr2=[];
    arr1=arr.filter(value=>value%2===0);
    arr2=arr.filter(value=>value%2!==0);
    return arr1.concat(arr2);
}
const testCases = [
  { input: [3, 1, 2, 4], expected: [2, 4, 3, 1] },
  { input: [1, 3, 5, 7], expected: [1, 3, 5, 7] },
  { input: [2, 4, 6, 8], expected: [2, 4, 6, 8] },
  { input: [], expected: [] },
  { input: [5, 4, 3, 2, 1], expected: [4, 2, 5, 3, 1] },
  { input: [2, 3, 1, 4, 5], expected: [2, 4, 3, 1, 5] },
  { input: [1, 2, 3, 4, 5], expected: [2, 4, 1, 3, 5] },
  { input: [6, 8, 2, 7, 5], expected: [6, 8, 2, 7, 5] },
];

testCases.forEach((testCase, index) => {
  const { input, expected } = testCase;
  const result = sortArrayByParity(input);
  console.log(`Test Case ${index + 1}:`);
  console.log("Input:", input);
  console.log("Expected Output:", expected);
  console.log("Actual Output:", result);
  console.log("Test Result:", JSON.stringify(expected)===JSON.stringify(result) ? "Passed" : "Failed");
  console.log("--------------------------------------------------");
});