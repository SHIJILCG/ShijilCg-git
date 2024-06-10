flag=0;
let result=[];
function removeDuplicates(arr) {
    let result1 = arr.filter((value,index, arr) => arr.indexOf(value) === index);
         return result1;
}
 function testRemoveDuplicates() {
        let obj=[
            {Input:[1,2,3,4,5,6],Output: [1,2,3,4,5,6]},
            {Input:[1,2,4,4,4,4,4,6],Output: [3,4,5]},
            {Input:[4,5,6],Output: [4,5,6]},
            {Input:[0],Output: [0]},
            {Input:[1],Output: [1]},
            {Input:[1,3,4,44,44],Output: [1]},
            {Input:[1,11,1],Output: [1,11]},
        ]       
       for(let p of obj){
          result=removeDuplicates(p.Input);
           if(result.length==p.Output.length){
               for(let i=0;i<=result.length;i++){
                   if(result[i]==p.Output[i]){
                       flag=1;
                   }else{
                    flag=0;
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
 testRemoveDuplicates();
 