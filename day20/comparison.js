age=10;
if(age<18)console.log("Too young to buy alcohol")
    ///////////////////////////////////////////////////
age="10";
if(isNaN(age)){
    console.log("Inout not an a nubmer");
}else{
    console.log("IS a number");
}
//////////////////////////////////////////////////////////////////////
let name ="n";
let text = "missing";
let result = name ?? text;
console.log(result);
//////////////////////////////////////////////////////////////////
const cars={type:"Fiat",model:"500",color:"white"};
console.log(cars.type);
console.log(cars?.name);
console.log(cars.model);
console.log(cars.color);
//////////////////////////////////////////////////////////
