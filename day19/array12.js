const numbers = [45, 4, 9, 16, 25];
numbers.forEach(nums);
function nums(value){
    console.log(value);
}
/////////////////////////////////
const numbers1 = [45, 4, 9, 16, 25];
const dd=numbers1.map(nub);
function nub(value){
    return value * 2;
}
console.log(dd);
/////////////////////////
const myarr=[1,2,3,4,5,6];
const newArr=myarr.flatMap((x)=>x*2);
console.log(myarr);
console.log(newArr);
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 87 }
  ];
const result = formatStudentScores(students);
console.log(result);
function formatStudentScores(students) {
  return students.map(students=>students.name);
  }
/////////////////////////////////////////
const numb=[45,,4,9,16,25];
const over18=numb.filter(myfunction);
function myfunction(value,index,arr){
    return value>18;
}
console.log(over18);
//////////////////////////
const over19=numb.filter((value)=>value>19);
console.log(over19);
//////////////////////////////////////////////
const number = [45, 4, 9, 16, 25];
const sum2=number.reduce(myf);
function myf(total,value,index,arr){
      return total + value;
}
console.log(sum2);
///////////////////////
const sum3=number.reduceRight(myf);
console.log(sum3);
///////////////////////////////
let a=0;
let b=[12345,546,2345,,546,4356,32425,3245,3245,324,32453,];
b.forEach(hi);
function hi(value){
   
     if(value > a){
        console.log(value + '......Increased ^^^^^^');
     }else{
        console.log(value + '......decreased VVVV')
     }
     a = value;
}
///////////////////////////
const name=["malayalam","kak","String","mango"]
const resul=name.map(babu);
function babu(value){
    return value.split('').reverse().join('');
}
console.log(resul);
for(let i=0;i<name.length;i++){
    if(name[i] === resul[i]){
        console.log(name[i]+'\tis an a palindrom');
    }
    else{
        console.log(name[i]+'\tis not an a palindrom')
    }
}
/////////////////////////////////////////////////////////////
const value=[
    {name:'shijil',age:30,color:'red'},
    {name:'babu',age:10,color:'blue'},
    {name:'divin',age:20,color:'redgreen'},
    {name:'sherin',age:50,color:'redblue'},
];
const value2=value.filter(my);
function my(value,index,arr){
     return value.age>20 && value.color==='red';
}
console.log(value2);
////////////////////////////////////////////////////////////////
const val=[
    {name:'shijil',age:30,color:'red'},
    {name:'babu',age:10,color:'blue'},
    {name:'divin',age:20,color:'redgreen'},
    {name:'sherin',age:50,color:'redblue'},
];
const val2=value.reduce(my1,0);
function my1(total,value,index,arr){
    return total + value.age;
}
console.log(val2);
/////////////////////////////////////////////////////////////
const numbe = [45, 44, 19, 161, 25];
let allOver18 = numbe.every(myFunction1);
function myFunction1(value,index,)
{
    return value >18;
}
if(allOver18){
    console.log("there  is no miner in this group");
}else{
    console.log("there  is a miner in this group");
}
////////////////////////////////////////////////////////
const numbe1 = [45, 44, 19, 161, 25];
let allOver17 = numbe.some(myFunction111);
function myFunction111(value,index,){
       return value >30;
}
if(allOver17){
    console.log("there  is a adult in this group");
}else{
    console.log("there  is no  adult in this group");
}   
/////////////////////////////////////////////////////
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys=fruits.keys();
for(let x of keys){
    console.log(x);
}
////////////////////////////////////
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
const keys11=fruits11.entries();
for(let x of keys11){
    console.log(x);
}
/////////////////////////////////////////////////////////
const months=["januar","februar","Mar","April"];
const mymonth=months.with(2,"March");
console.log(mymonth);
console.log(months);
//////////////////////////////////////////
const q1=["Jan","Feb","Mar"];
const q2=["Apr","May","jun"];
const q3=["Jul","Aug","Sep"];
const q4=["Oct","Aug","May"];
const year=[...q1,...q2,...q3,...q4];
console.log(year);
////////////////////////////////////
const n = [44, 44, 21, 10, 22];
console.log(n.every((x)=>x%2===0));
////////////////////////////////////////////
const cars1=["saab","Volvo","BMW"];
cars1[0]="toyota";
console.log(cars1);
cars1.push("Audi");
console.log(cars1);
/////////////////////////////////////////////
const cars2=["saab","Volvl","audi"];
{
    const cars3=["Ferari","Volvl","audi"];
    console.log(cars3[0]);
}
console.log(cars2[0]);
////////////////////////////////////////////////////////////////

