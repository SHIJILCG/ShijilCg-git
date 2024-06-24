const person={
    maths:100,
    physics:150,
    english:50,
    Agrade:function(){
       return Object.keys(this).filter(keys=>this[keys]>90);
    },
}
console.log(person.Agrade());