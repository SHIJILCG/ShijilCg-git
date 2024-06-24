
try{
    secondName.log("hiiii");
}catch(err){
    console.log(err.message);
}
/////////////////////////////////////////
try{
    for(let i=10;i<=100;i+=10){
        if(i===90)throw "Something went wrong";
        console.log("Update.."+i+"%");
    }

}catch(err){
   console.log(err);
}
////////////////////////////////////////////////////////////
try{
    occcsv,rkrg;
}catch(err){
    console.log(err.name)
}
finally{
    console.log("HII buddy what happend");
}
//////////////////////////////////////////////////////
let num=1;
try{
    num.toPrecision(500);
}catch(err){
    console.log(err.name)
}
//////////////////////////////////////////////////////
console.log("hii");
let x=5;
try{
    x=y+1;
}catch(err){
    console.log(err.name)
}
//////////////////////////////////////////////////////
console.log("hii");
try{
  eval("alert('hello)");
}catch(err){
    console.log(err.name)
}
//////////////////////////////////////////////////////
console.log("hii");
let num1=1;
try{
    num.toUpperCase();
}catch(err){
    console.log(err.name)
}
//////////////////////////////////////////////////////
console.log("hii");
try{
   decodeURI("%%%%")
}catch(err){
    console.log(err.name)
}