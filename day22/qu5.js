//array mountain
function validMountainArray(arr) {
  if (arr.length < 3) {
    return false;
  }

  let i = 0;
  let flag = 0;

  while (i < arr.length - 1) {
    if (arr[i] < arr[i + 1]) {
      i++;
      flag = 1;
    } else {
      break;
    }
  }

  if (i === 0 || i === arr.length - 1) {
    return false;
  }

  while (i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) {
      i++;
    } else {
      flag = 0;
      break;
    }
  }

  return flag === 1 && i === arr.length - 1;
}
const testCases=[
  {Input:[0, 3, 2],Output:true},
  {Input:[1, 2, 3],Output:false},
  {Input:[3, 2, 1],Output:true},
  {Input:[0, 1, 2, 3, 2, 1, 0],Output:true},
  {Input:[0, 1, 2, 3, 2, 1],Output:true},
  {Input:[1, 2, 3, 4],Output:false},
  {Input:[5, 4, 3, 2, 1],Output:false},
]
function TestvalidMountainArray(){
  testCases.forEach((testCase,index)=>{
         let result=validMountainArray(testCase.Input);
         console.log("Test",index+1);
         console.log("Test Input:",testCase.Input);
         console.log("Test Excepted Result:",testCase.Output);
         console.log("Actual Test Result",result);
         console.log("Test",result===testCase.Output?"Passed":"Failed");
         console.log(".................................................")
  })
}
TestvalidMountainArray()

