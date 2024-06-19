function snakework(arr) {
  let result = [];
  arr.forEach((value, index) => {
    if (index % 2 === 0) {
      result.push(...value);
    } else {
      let res = value.reverse();
      result.push(...res)
    }
  });
  return result;
}
let testCase = [
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    exp: [1, 2, 3, 6, 5, 4, 7, 8, 9],
  },
  {
    input: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    exp: [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12],
  },
];
function Testsnakework() {
  testCase.forEach((testCases, index) => {
    let result = snakework(testCases.input);
    console.log("Test No:", index + 1);
    console.log("The Input:", testCases.input);
    console.log("The Expected result:", testCases.exp);
    console.log("The Actual Result:", result);
    console.log(
      "The Test Resuklt:",
      JSON.stringify(testCases.exp) === JSON.stringify(result)
        ? "Passed"
        : "Failed"
    );
    console.log(
      ".............................................................................."
    );
  });
}
Testsnakework();
