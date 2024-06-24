class Menu{
   handlerEvent(event){
      let method='on' + event.type[0].toUpperCase()+event.type.slice(1);
      this[method](event);
   }
   onmousedown(){
    elem4.innerHTML="Mouse button pressed";
   }
   onmouseup(){
    elem4.innerHTML="....and released";
   }
}
let menu =Menu();
elem4.addEventListener('mousedown',menu);
elem4.addEventListener('mouseup',menu);