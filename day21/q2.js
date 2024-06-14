function removeDuplicates(arr) {
        return arr.filter((value,index,arr)=>arr.indexOf(value)===index);
 }
 const testcases=[
   { Input:[1, 2, 2, 3, 4, 4, 5, 1],Output:[1, 2, 3, 4, 5]},
    {Input:[],Output:[]},
    {Input:[1],Output:[1]},
    {Input:[1, 2,],Output:[1, 2]},
    {Input:[1,1,1],Output:[1]}, 
     {Input:[1, 2, 2, 3, 4, 4, 5],Output:[1, 2, 3, 4, 5]},
 ]
 function testremoveDuplicates(){
    testcases.forEach(testcase=>{
          const result=removeDuplicates(testcase.Input);
          console.log("Input:"+testcase.Input);
          console.log("Expected result:"+testcase.Output);
          console.log("Actual result:"+result);
          console.log("Test Result:",JSON.stringify(testcase.Output)===JSON.stringify(result)?"Passed":"Failed");
          console.log("........................................................");
    });
 }
 testremoveDuplicates()