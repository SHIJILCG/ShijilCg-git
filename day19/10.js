const numbers=[1,2,3,4,5];
const res=numbers.some(greatherthanfour)
function greatherthanfour(item){
    return item>4;
}
console.log(res);

///////////////////////////////////
const person=[
    {name:'shijil',Age:25},
    {name:'Divin',Age:20},
    {name:'Babu',Age:16}
];
const res1=person.some(isadults)
function isadults(person){
    person.age>=18;
}
console.log(res);