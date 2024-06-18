function findMaxConsecutiveOnes(arr){
    let counter=0;
     maxcount=0;
     arr.forEach(value => {
        if(value===1){
            ++counter
        }else{
            if(counter>maxcount){
                maxcount=counter
            }
         counter=0;
        }
     });
     if(counter>maxcount){
        maxcount=counter
    }
     return maxcount;
}  
const testCases=[
    {Input:[1, 1, 0, 1, 1, 1],Output:3},
    {Input:[1],Output:1},
    {Input:[1, 1, 1, 1, 1, 1],Output:6},
    {Input:[1, 0, 0, 0, 0, 1],Output:1},
    {Input:[0],Output:0},
    {Input:[],Output:0},
    {Input:[1, 1, 0, 1, 0, 1],Output:2},
]
function TestfindMaxConsecutiveOnes(){
    testCases.forEach((testCase,index)=>{
        let result=findMaxConsecutiveOnes(testCase.Input);
        console.log("Test Case:",index+1);
        console.log("Test Input:",testCase.Input);
        console.log("Test Excepted Result:",testCase.Output);
        console.log("The Actual Result:",result);
        console.log("Test Result:",result===testCase.Output?"Passed":"Failed");
        console.log("..........................................................")
    })
}
TestfindMaxConsecutiveOnes()