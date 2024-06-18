//////////////////////////Sq of an array
function mapsqures(arr) {
  let newArr = [];
  arr.forEach((elem, index) => {
    newArr.push(elem * elem);
  });
  return newArr;
}
let testcases = [
  { Input: [1, 2, 5, 5, 6, 6, 7], Output: [1, 4, 25, 25, 36, 36, 49] },
  { Input: [1], Output: [1] },
  { Input: [], Output: [] },
  { Input: [1, 1], Output: [1, 1] },
  { Input: [0], Output: [0] },
];
function Testmapsqures() {
  testcases.forEach((testcase) => {
    const result = mapsqures(testcase.Input);
    console.log("The Input:", testcase.Input);
    console.log("The Excepted Output:", testcase.Output);
    console.log("The Actual Output:", testcase.Output);
    console.log(
      "The Test Result:",
      JSON.stringify(testcase.Output) === JSON.stringify(result)
        ? "Passed"
        : "Failed"
    );
    console.log("........................................................");
  });
}
Testmapsqures();
