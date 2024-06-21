Array.prototype.last = function() {
       if(this.length!==0)return this[this.length-1];
       else return -1;
};
const testCases=[
    {arr:[null,{},3],exp:3},
    {arr:[],exp:-1},
    {arr:[null,{},],exp:{}},
    {arr:[null],exp:null},
]
function Testnums(){
    testCases.forEach((values,index)=>{
        let result=values.arr.last();
        if(JSON.stringify(result)===JSON.stringify(values.exp)){
            console.log("Test",index+1,"Passed");
        }else{
            console.log("Test",index+1,"Failed");
            console.log("The Expected Result:",values.exp);
            console.log("The Actual Result:",result);
            console.log("....................................")
        }
    })
}
Testnums()