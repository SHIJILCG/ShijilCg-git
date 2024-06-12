let text="";
const today=new Date();
const someday=new Date();
someday.setFullYear(2100,0,14);
if(someday>today){
    console.log("Today is before January 14,2100");
}else{
     console.log("Today is after January 14, 2100.")
}