class Menu{
    handleEvent(event){
        switch(event.type){
            case 'mousedown':
                elem.innerHTML="Mouse button pressed";
                break;
            case 'mouseup':
                elem.innerHTML+="...and released";
                break;    
        }
    }
}
let Menu = new Menu();
elem.addEventListener('mousedown',Menu);
elem.addEventListener('mouseup',Menu);