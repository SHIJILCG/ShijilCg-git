let flag=0;
let result=[];
function rotateArray(arr, k) {
       let b=arr.length;
      let brr=arr.slice(-k,b);
       arr.splice(-k,b);
       return result=brr.concat(arr);
}
 function testRotateArray() {
        let obj=[
            {Input:[1,2,3,4,5,6],Rotate:1,Output: [6,1,2,3,4,5]},
            {Input:[1,2,4,5,6],Rotate:0,Output: [3,4,5]},
            {Input:[4,5,6],Rotate:5,Output: [4,5,6]},
            {Input:[0],Rotate:0,Output: [0]},
            {Input:[1],Rotate:1,Output: [1]},
            {Input:[0],Rotate:1,Output: [1]},
            {Input:[1,11,1],Rotate:1,Output: [11]},
        ]       
       for(let p of obj){
            result = rotateArray(p.Input,p.Rotate);
           if(result.length==p.Output.length){
               for(let i=0;i<=result.length;i++){
                   if(result[i]==p.Rotate[i]){
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
testRotateArray();
