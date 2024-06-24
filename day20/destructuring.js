const person ={
    firstName:"john",
    secondName:"doe",
    age:50
};
let{firstName,secondName}=person;
console.log(firstName+'_'+secondName);
let {country="us"}=person;
console.log(country);
//////////////////////////////////////////////////
const fruit=["Bananas", "Oranges", "Apples", "Mangos"];
let[fruits1,,,fruits2]=fruit;
console.log(fruits1);
console.log(fruits2);
{
    const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
    let {[0]:fruit1 ,[1]:fruit2} = fruits; 
    console.log(fruit1,fruit2);
}{
    const numbers=[10,20,30,40,50,60,70];
    const [a,b,...rest]=numbers;
    console.log(a);
    console.log(b);
    console.log(...rest);
}
////////////////////////////////////////////////////////
const fruits=new Map([
    ["apple",500],
    ["banana",300],
    ["orange",200],
]);
let text="";
for(const[keys,values] of fruits){
    console.log(keys,values);
}
/////////////////////////////////////////////////////
{
let firstName="john";
let secondName="Wick";
[firstName,secondName]=[secondName,firstName];
console.log(firstName);
console.log(secondName);
}