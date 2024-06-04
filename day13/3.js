let modulePath=prompt("Which module to load");
import(modulePath)
// .then(obj=><module object>)
// .catch(err =><loading error,e.g.if no such module>)
/////////////////////
export function hi(){
    alert(`Hello`);
}
export function bye(){
    alert(`bye`);
}
/////////////////////////
let {hi,bye}=await import('./say.js');
hi();
bye();
///////////////////////////////////
export default function(){
    alert("Module lloaded(export default)")
}
//////////////////
let obj=await import('./say.js');
let say=obj.default;
say();
/////////////////
