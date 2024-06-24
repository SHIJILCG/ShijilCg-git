function number_of_times_appears(arr){
    let Obj={};
    arr.forEach((elements)=>{
        if(Obj[elements]){
             Obj[elements]++
        }else{
            Obj[elements]=1;
        }
    })
   return Obj; 
}
const fruits=[
   {arr:['apple', 'banana', 'apple', 'orange', 'banana', 'apple'],exp:{ apple: 3, banana: 2, orange: 1 } },
   {arr:['apple'],exp:{ apple: 1,} },
   {arr:[],exp:{} },
   {arr:['apple', 'banana', 'apple', 'banana',],exp:{ apple: 2, banana: 2,} }, 
]
function Testnumber_of_times_appears(){
    fruits.forEach((value,index)=>{
        let result=number_of_times_appears(value.arr);
        if(JSON.stringify(result)===JSON.stringify(value.exp)){
             console.log("Test",index+1," Passed");
        }else{
            console.log("Test",index+1," Failed");
             console.log("The Expected result:",value.exp);
             console.log("The Actual Result:",result);
        }
    })
}
Testnumber_of_times_appears()