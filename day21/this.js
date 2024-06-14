const person={
    firstName:"john",
    lastName:"doe",
    id:5566,
    fullname:function(){
       return this.firstName+ " " +this.lastName;
    }
};
console.log(person.fullname());
//////////////////////////////////////////////
let x=this;
console.log(x);
/////////////////////////////////////////////////////
function myfunction(){
    return this;
}
console.log(myfunction());
////////////////////////////////////////////////
{
    const person={
        firstName:"john",
        lastName:"Doe",
        id:55866,
        myFunction : function() {
            return this;
        }
    };
    console.log(person.myFunction());
};
//////////////////////////////////////

{
    const person1={
        FullNAme:function(){
            return this.firstName + " " + this.lastName;
        }
    }
    const person2={
        firstName:"Shijil",
        lastName:"CG",
    }
    console.log(person1.FullNAme.call(person2));
}
/////////////////////////////////////////////////////////////////////
{
    const person={
        firstName:"john",
        lastName:"Doe",
        fullname:function(){
            return this.firstName+" "+this.lastNameName;
        }
    }
    const person2={
        firstName:"shijil",
        lastName:"CG"
    }
    const fullName=person.fullname.bind(person2);
    console.log(fullName());
}