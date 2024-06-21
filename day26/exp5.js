 function sortBy(arr, fn) {
    let result= arr.sort((a, b) => fn(a) - fn(b));
    return result;
};
const testCases=[
    {arr:[{"x": -1}, {"x": 0}, {"x": 1}],exp:[ { x: -1 }, { x: 0 }, { x: 1 } ]},
    {arr:[5, 4, 1, 2, 3],exp:[1, 2, 3, 4, 5]}
]
function TestsortBy() {
    testCases.forEach((value, index) => {
      let reesult =sortBy(value.arr,  (x) => x);
      if (JSON.stringify(reesult) === JSON.stringify(value.exp)) {
        console.log("Test", index + 1, "Passed");
      } else {
        console.log("Test", index + 1, "Failed");
        console.log("The Expected Result:", value.exp);
        console.log("The Actual  Result:", reesult);
        console.log("......................................");
      }
    });
  }
  TestsortBy()