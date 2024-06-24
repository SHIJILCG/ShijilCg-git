function evennumb(arr){
    let brr;
    brr=arr.filter(value=>value%2===0);
    return brr;
}
let testCases = [
  {
      arr: [1,2,3,4,5],
      exp: [2,4],
  },
  {
      arr: [1,1,1,1,1],
      exp: [],
  },
  {
      arr: [2,2,2,2,2],
      exp: [2,2,2,2,2],
  },
]
function Testevennumb() {
    testCases.forEach((testCase, index) => {
      let result = evennumb(testCase.arr);
      console.log("Test Case:", index + 1);
      console.log("Test Input:", testCase.arr);
      console.log("Test Excepted Result:", testCase.exp);
      console.log("The Actual Result:", result);
      console.log(
        "Test Result:",
        JSON.stringify(result) === JSON.stringify(testCase.exp)
          ? "Passed"
          : "Failed"
      );
      console.log("..........................................................");
    });
  }
  Testevennumb();
