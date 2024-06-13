const fruits =new Map();
fruits.set("apple",500);
fruits.set("banana",300);
fruits.set("oranges",200);
for(let i of fruits){
    console.log(i);
}
///////////////////////////
console.log(fruits.get("apple"));
console.log(fruits);
fruits.set("apple",200);
for(let i of fruits){
    console.log(i);
}
console.log("Hii");
//////////////////////////////////////
// let a={name:"shjikl",age:30};
// for(let i of a){
//     console.log(i);
// }
fruits.delete("apple");
for(let i of fruits){
    console.log(i);
}
/////////////////////////////////////////////////////
fruits.clear();
for(let i of fruits){
    console.log(i);
}
///////////////////////////////////////
fruits.set("apple",500);
fruits.set("banana",300);
fruits.set("oranges",200);
console.log(fruits.has("apple"));
//////////////////////////////////////////////
const b=[...fruits.entries()].sort((a,b)=>a[1]-b[1]);
console.log(b);
console.log("hiii");
/////////////////////////////////////////
const apples={name:"shijil",age:30};
const oranges={name:"babu",age:30};
const  bananas={name:"divin",age:30};
const  pinapples={name:"sherin",age:30};
const fruits1=new Map();
fruits1.set(apples,500);
fruits1.set(oranges,400);
fruits1.set(bananas,300);
fruits1.set(pinapples,100);
for(let a of fruits1){
    console.log(a);
}
console.log("hii");
console.log(fruits1.get(apples));
////////////////////////////////////////
for(let a of fruits1.keys()){
   console.log(a.name);
}
console.log("hii");
///////////////////////////////////////////
const fruit = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  function mycallback({quantity}){
    return quantity >200?"ok":"low";
  }
  const result=Map.groupBy(fruit,mycallback);
  console.log("Values under 'ok'");
  for(let i of result.get("ok")){
      console.log(i);
  }
  console.log("Values under 'low'");
  for(let i of result.get("low")){
      console.log(i);
  }
  ///////////////////////////////
  console.log("hii");
  let mapy = [
    {name:"Divin",age:20},
    {name:"Shijil",age:21},
    {name:"poocha",age:30},
    {name:"thomman",age:16}
];
function checkAge({age}){
    return age>18?"nah not any problem":"you are too young";
}
let result1 = Map.groupBy(mapy,checkAge);
console.log(result1);
////////////////////////////////////////
