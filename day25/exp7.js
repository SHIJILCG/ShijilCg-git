var expected=function(value){
     return{
        tobe:(val)=>{
            if(value!==val){
                throw new Error("Not Equal")
            }else{
                 return true
            }
        },
        notobe:(val)=>{
             if(value===val){
                throw new Error("Equal");
             }else{
                return true;
             }
        }
     }
};
const func=()=>{
    try{
        return expected(5).notobe(5);
    }catch(error){
        return error.message
    }
}
console.log(func());
