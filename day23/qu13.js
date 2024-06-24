function repeating(str){
   let a={};
   for(let i of str){
      if(a[i]){
        a[i]++;
      }else{
        a[i]=1;
      }
   }
   for(let key in a){
      if(a[key]===1){
        return key;
        break;
      }
   }
   return -1;
}
const testCase=[
    {input:"hii",exp:'h'},
    {input:"",exp:-1},
]
function Testrepeating(){
    testCase.forEach((testCases,index)=>{
        let result=repeating(testCases.input);
        console.log("Test Index:",index+1);
        console.log("The Input:",testCases.input);
        console.log("The Expected Result:",testCases.exp);
        console.log("The Actual Result:",result);
        console.log("Test Result:",JSON.stringify(testCases.exp)===JSON.stringify(result)?"Passed":"failed");
        console.log("...........................................................")
    })
}
Testrepeating()