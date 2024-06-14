class cars{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    display(){
        console.log("your car is "+this.year+" "+"model"+" "+this.name);
    }
}
const mycar1=new cars("ford",2015);
const mycar2=new cars("Nisan GTR",1964);
mycar1.display();
mycar2.display();
//////////////////////////////////////////////////////////
{
    class Car{
        constructor(name,year){
            this.name=name;
            this.year=year;
        }
        age(){
            const date= new Date();
            return date.getFullYear()-this.year;
        }
    }
    const car1=new Car("Ford",2015);
    console.log(car1.name+" "+"is" + " "+car1.age()+" "+"years old");
}