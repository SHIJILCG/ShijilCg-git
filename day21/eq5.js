function findOddOccurrences(arr) {
    return arr.filter((value,index,arr)=>arr.indexOf(value)===index && value%2===0);
}
const testcases = [
    { Input: [1, 2, 2, 3, 3, 4, 5, 5, 5], Output: [2, 4] },
    { Input: [1, 1, 2, 2, 3, 3, 4, 5, 5], Output: [2, 4] },
    { Input: [1, 1, 2, 2, 3, 3, 4, 4, 5], Output: [2, 4] },
    { Input: [1, 3, 5], Output: [] },
    { Input: [], Output: [] },
    { Input: [1], Output: [] },
];
function testfindOddOccurrences(){
     testcases.forEach((testcase)=>{
     const result=findOddOccurrences(testcase.Input)
     console.log("The Input:",testcase.Input);
     console.log("The Excepted Output:",testcase.Output);
     console.log("The Actual Output:",result);
     console.log("The Test Result:",JSON.stringify(testcase.Output)===JSON.stringify(result)?"Passed":"Filed");
     console.log("..........................................................")
});
}
testfindOddOccurrences()