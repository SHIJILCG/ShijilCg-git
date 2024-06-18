function firstUniqueCharacter(arr) {
  for (let str of arr) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if(str.indexOf(char) === str.lastIndexOf(char)) return [char];
    }
  }
  return [];
}
const testCases=[
    {Input:["heello"],Output:['h']},
    {Input:["lll"],Output:[]},
    {Input:["halo"],Output:['h']},
    {Input:[],Output:[]},
    {Input:["h"],Output:['h']},
    {Input:["hiih"],Output:[]},
    {Input:["ded"],Output:['e']},
  ]
  function TestfirstUniqueCharacter(){
    testCases.forEach((testCase,index)=>{
           let result=firstUniqueCharacter(testCase.Input);
           console.log("Test",index+1);
           console.log("Test Input:",testCase.Input);
           console.log("Test Excepted Result:",testCase.Output);
           console.log("Actual Test Result:",result);
           console.log("Test",JSON.stringify(result)===JSON.stringify(testCase.Output)?"Passed":"Failed");
           console.log(".................................................")
    })
  }
  TestfirstUniqueCharacter()
