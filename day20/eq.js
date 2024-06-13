const names = [
    {name:"shiji", age:30},
    {name:"divin", age:70},
    {name:"babu", age:10},
    {name:"sherin",age:20}
  ];
  function mycallback({age}){
      if(age>30)return "you are above the maximum age";
      else if(age>20 && age<100) return "you are perfect for this job";
      else if(age>0 && age<20) return  "you are below the minimum age";
  }
  const result=Map.groupBy(names,mycallback);
 console.log("you are above the maximum age");
 for(let a of result.get("you are above the maximum age")){
     console.log(a);
 }
 console.log("you are below the minimum age");
 for(let a of result.get("you are below the minimum age")){
     console.log(a);
 }