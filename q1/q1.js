let flag=0;
let result=[];
function findAllOccurrences(arr, target) {
    let arr2=[];
      for(let i=0;i<=arr.length;i++){
        if(arr[i]==target){
            arr2.push(i)
        }
      }
     return(arr2);
}
function testfindAllOccurrences(){
   
     let obj=[
        {Input:['apple', 'banana', 'apple', 'orange', 'banana', 'apple'],word: 'apple',Output: [ 2, 5]},
        {Input:['apple', 'apple', 'apple'],word: 'orange',Output: []},
        {Input:['apple', 'banana'],word: 'banana',Output: [2]},  
        {Input:['apple', 'apple', 'apple', 'banana', 'banana', 'apple'],word: 'banana',Output: [1, 2, 5]},
     ]       
    for(let p of obj){
         result = findAllOccurrences(p.Input,p.word);
        if(result.length==p.Output.length){
            for(let i=0;i<=result.length;i++){
                if(result[i]==p.Output[i]){
                    flag=1;
                }
            }
        }
        if(flag==1){
           console.log("Test passed");
        }else{
            console.log("Test failed correct output is" +result); 
        }
        flag=0;
    } 
}
testfindAllOccurrences();
