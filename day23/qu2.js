function XORop(arr){
      let sum = 0;
    let result =[];
    let su;
    for(let i=0;i<arr.length;i++){
         for(let j=1;j<arr.length;j++){
                 su=arr[i] ^ arr[j];
               if(su>=sum){
                  if(arr[i]===arr[j])continue;
                    result=[];
                   result.push(arr[i],arr[j]);
                   sum=su;
               } 
         }
        }
    return result;
}
const testCases = [
    { Input: [3, 10, 5, 25, 2, 8], Output: [25,5] },
    { Input: [], Output: [] },
    { Input: [1], Output: [] },
    { Input: [0], Output: [] },
  ];
  function TestXORop() {
    testCases.forEach((testCase, index) => {
      let result = XORop(testCase.Input);
      console.log("Test Case:", index + 1);
      console.log("Test Input:", testCase.Input);
      console.log("Test Excepted Result:", testCase.Output);
      console.log("The Actual Result:", result);
      console.log(
        "Test Result:",
        JSON.stringify(result) === JSON.stringify(testCase.Output)
          ? "Passed"
          : "Failed"
      );
      console.log("..........................................................");
    });
  }
  TestXORop();
  
