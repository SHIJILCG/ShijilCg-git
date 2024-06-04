// export default class user{
//     constructor(name){
//         this.name=name;
//     }
// }
// import user from'./user.js';
// new UserActivation('john');
// export default class{
//     constructor(){}
// }
// export default class{
//     constructor(){}
// }
// export default function(user){
//     alert(`Hello,${user}`);
// }
function sayHi(user){
    alert(`Hello,${user}`);
}
//////
export default class user{
    constructor(name){
        this.name=name;
    }  
}
export function sayHi(user){
    alert(`Hello,${user}`);
}
/////////////////////
import{default as User,sayHi}from './user.js';
new User('john');
/////////////////////
import * as user from'./user.js';
let user=user.default;
new User('john');
///////////////////
import User from './user.js';
import MyUser from './user.js';
///////////////////////////
import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';
//////////////////////////////
export {sayHi} from './say.js';
export{default as User}from './user.js';
////////////////
import {login,logout}from './helpers.js';
export{login,logout};
import User from './user.js';
export{User};
////////////////////////
export{login,logout}from './helpers.js';
export{default as User} from './user.js';
//////////////////////