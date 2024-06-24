function AddEmployee(name,age,ph,salary,dep){
     Employee.push({name,age,ph,salary,dep})
}
function RemoveEmployee(name){
     Employee=Employee.filter(values=>values.name!=name)
}
function UpdateSalary(name,salary){
   Employee.forEach(values=>{if(values.name===name)values.salary=salary} )
}
function FindEmployeebyDepartment(value){
    let result=Employee.filter((values)=>values.dep===value)
    console.log(result);
}
function CalculateAverageSalary(){
     let result1=Employee.length;
     let result2=Employee.reduce((total,value)=>total + value.salary,0);
     let resul=result2/result1;
     console.log(resul);
}
let Employee=[
   
]
AddEmployee("shijil",30,98989787,50000,"cs");
AddEmployee("Babu",20,12300002,12000,"math");
UpdateSalary("shijil",300000,)
RemoveEmployee("shijil");
AddEmployee("shijil",30,98989787,50000,"math");
AddEmployee("Divin",40,111111,100000,"cs");
AddEmployee("sherin",19,144444,20000,"cs");
FindEmployeebyDepartment("cs");
RemoveEmployee("Divin");
CalculateAverageSalary();
console.log(Employee);

