elem.onClick=function(){
    elem.onClick=function(event){
          alert(event.type + "at" + event.currentTarget);
          alert("Coordinates" +event.onClickX + ":" +event.clientY );
    };
}