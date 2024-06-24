//max continues elem sum
function maxSubarray(arr){
    if(arr.length===0) return [];
    if(arr.length===1) return arr;
     let result=[];
     let result1=[];
     totalsum=arr.reduce((total,value)=>total +value);
     for(let start=0;start<arr.length;start++){
           for(let end=start+1;end<=arr.length;end++){
              result.push(arr.slice(start,end)) ;
           }
     }
    result.forEach((value)=>{
        totalsum1=value.reduce((total,value)=>total +value);
        if(totalsum1>=totalsum){
            totalsum=totalsum1;
             result1=[...value];
        }
    }
    )
    return result1;

}
const testcases=[
    { Input: [-1, 2, -3, 4], Output: [4] },
    { Input: [1, 2, 3], Output: [1, 2, 3] },
    { Input: [-1, -2, -3], Output: [-1] },
    { Input: [0, 0, 0], Output: [0] },
    { Input: [-5, 10, -15, 20], Output: [20] },
    { Input: [], Output: [] },
    { Input: [1], Output: [1] },
];
function TestmaxSubarray(){
    testcases.forEach((testcase)=>{
            const result=maxSubarray(testcase.Input);
            console.log("Test Input:",testcase.Input);
            console.log("Test Excepted Output:",testcase.Output);
            console.log("The Actual Result:",result);
            console.log("Test Result:",JSON.stringify(testcase.Output)===JSON.stringify(result)?"Passed":"Failed");
            console.log("..................................................................");
    })
}
TestmaxSubarray()