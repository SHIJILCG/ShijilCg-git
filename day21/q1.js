function findAllOccurrences(arr, target) {
  const brr = arr
    .map((value, index) => (value === target ? index : -1))
    .filter((index) => index !== -1);
  return brr;
}
const testcases = [
  {
    Input: ["apple", "banana", "apple", "orange", "banana", "apple"],
    world: "apple",
    Output: [0, 2, 5],
  },
  {
    Input: [],
    world: "apple",
    Output: [],
  },
  {
    Input: ["apple"],
    world: "apple",
    Output: [0],
  },
  {
    Input: ["apple", "banana", "apple", "apple"],
    world: "apple",
    Output: [0, 2, 3],
  },
];
 function testfindAllOccurrences(){
     testcases.forEach((testcase) => {
        const result = findAllOccurrences(testcase.Input, testcase.world);
        console.log("Test case Input:"+testcase.Input);
        console.log("Target:"+testcase.world);
        console.log("Expected Output:",testcase.Output);
        console.log("Actual result"+result);
        console.log("Test result:",JSON.stringify(result)==JSON.stringify(testcase.Output)?"Passed":"Failed");
        console.log("----------------------------------------");
     });
}
testfindAllOccurrences();