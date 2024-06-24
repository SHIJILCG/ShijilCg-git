function rotateArray(brr, k) {
  let result2 = brr.splice(-k, brr.length);
  return result2.concat(brr);
}
const testcases = [
  { Input: [1, 2, 3, 4, 5], Rotate: 0, Output: [1, 2, 3, 4, 5] },
  { Input: [1, 2, 3, 4, 5], Rotate: 2, Output: [4, 5, 1, 2, 3] },
  { Input: [1, 2, 3, 4, 5], Rotate: 5, Output: [1, 2, 3, 4, 5] },
  { Input: [1, 2, 3, 4, 5], Rotate: 1, Output: [5, 1, 2, 3, 4] },
  { Input: [1, 2, 3, 4, 5], Rotate: 3, Output: [3, 4, 5, 1, 2] },
  { Input: [], Rotate: 0, Output: [] },
  { Input: [], Rotate: 1, Output: [] },
  { Input: [1], Rotate: 1, Output: [1] },
  { Input: [1, 2], Rotate: 1, Output: [2, 1] },
];
function testrotateArray(){
    testcases.forEach(testcase=>{
         const result=rotateArray([...testcase.Input],testcase.Rotate); 
         console.log(result);
         console.log("The Input:"+ testcase.Input);
         console.log("Rotate:",testcase.Rotate);
         console.log("Excepted Result:",testcase.Output);
         console.log("Actual Result:",result);
         console.log("Test Result:",JSON.stringify(testcase.Output)===JSON.stringify(result)?"Passed":"Failed");
         console.log("......................................")
    });
}
testrotateArray();