class Menu{
    handleEvent(event){
        let method='on' + event.type[0].toUpperCase()+event.type.slice(1);
        this[method](event);
    }
    onMousedown(){
        elem1.innerHTML="Mouse button pressed";
    }
    onMouseup(){
        elem1.innerHTML+="...and released";
    }
}
let menu=new Menu();
elem1.addEventListener('mousedown',menu);
elem1.addEventListener('mouseup',menu);