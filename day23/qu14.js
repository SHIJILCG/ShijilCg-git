function productExceptSelf(arr){
    let result=[];
    let result2=[];
     for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length-1;j++){
            for(let k=j+1;k<arr.length;k++){
                  result.push([arr[i],arr[j],arr[k]])
            }
        }
     }
     result2=result.map(val=>{
        return val.reduce((total,value1)=>{
           return  total * value1
        })
     })
     return result2;
}
const testCase=[
    {input:[1, 2, 3, 4],result:[ 6, 8, 12, 24 ]},
    {input:[1, 2, 4],result:[8]},
    {input:[],result:[]},
    {input:[1],result:[]},
]
function TestproductExceptSelf(){
    testCase.forEach((testCases,index)=>{
        let result=productExceptSelf(testCases.input);
        console.log("Test No:",index+1);
        console.log("The Test Input:",testCases.input);
        console.log("The Expected Result:",testCases.result);
        console.log("Test Actual Result:",result);
        console.log("The Test Result:",JSON.stringify(result)===JSON.stringify(testCases.result)?"Passed":"Failed");
        console.log(".........................................................");
    })
}
TestproductExceptSelf()