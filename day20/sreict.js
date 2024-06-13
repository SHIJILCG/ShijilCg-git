"use strict"
x=3.14;
console.log(x);
var x;
{
    "use strict";
    myfunction();
    function myfunction(){
       var y=3.14
    }
}
{
   x=3.14;
   console.log(x);
   myfunction();
   function myfunction(){
    "use strict";
    var h=1.3;
   }
}{
   let z={p1:10,p2:20};
    console.log(z);
}{
    "use strict";
    let x=3.14;
}{
   "use strict";
function x(p1, p2) {}; 
}
{
  "use strict";
//   let x=010;    
}

{
    "use strict";
//     let x="\010"
// }}
}
{
    "use strict";
    const obj={};
    Object.defineProperties(obj,"x",{value:0,writable:false});
    obj.x=3.14;
}
{
    "use strict";
    const obj={get x() {return 0}};
    obj.x=3.14;
}
{
    "use strict";
    delete Object.prototype;
}
{
    "use strict";
    // let eval=3.14;
}
////////////////////////////////////////////////////////////////
{
    "use strict";
    // let arguments=3.14;
}
/////////////////////////////////////////////////////////////////
{
   "use strict";
//    with (Math){x=cos(2)}; 
}
//////////////////////////////////////////////////////////////
{
   "use strict";
   eval ("var x=2");
   alert(x);
}
{
    eval("let x=2");
    alert(x);
}
{
    "use strict";
    function myfunction(){
        alert(this);
    }
    myfunction();
}
{
    "use strict";
    let public=15000;
}