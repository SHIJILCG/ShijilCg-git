const letters=new Set(["a","b","c"]);
answer=letters.has("d");
/////////////////////////////////
const a=letters.forEach((value)=>{
   console.log(value);
})
console.log("hii");
////////////////////////////////////////
const b=letters.values();
for(let h of b)console.log(h);
console.log("hii");
///////////////////
for(let a of letters.entries()){
    console.log(a);
}
//////////////////////////////////////////
let a1=[1,2,3,4,4,5,5,5,5];
for(let a of a1.keys()){
    console.log(a);
}
////////////////////////////
// console.log("hii");
// let a2={name:"shijil",age:30};
// for(let a of a2.values()){
//     console.log(a);
// }
