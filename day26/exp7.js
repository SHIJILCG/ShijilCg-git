function addValueToArray(arr, value) {
  let result = [];
  function helper(innerArr, currentValue) {
    for (let item of innerArr) {
      if (Array.isArray(item) && currentValue > 0) {
        helper(item, currentValue - 1);
      } else {
        result.push(item);
      }
    }
  }
  helper(arr, value);
  return result;
}
const testCases = [
  {
    arr: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
    n: 0,
    exp: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
  },
  {
    arr: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
    n: 1,
    exp: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15],
  },
  {
    arr: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    n: 2,
    exp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
];
function TestaddValueToArray() {
  testCases.forEach((value, index) => {
    let result = addValueToArray(value.arr, value.n);
    if (JSON.stringify(result) === JSON.stringify(value.exp)) {
      console.log("Test", index + 1, "Passed");
    } else {
      console.log("Test,", index + 1, "Failed");
      console.log("The Expected Result:", value.exp);
      console.log("The Actual Result:", result);
    }
  });
}
TestaddValueToArray();
