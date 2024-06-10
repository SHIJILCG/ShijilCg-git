elem1.onclick=function(event){
     alert(event.type + "at" + event.currentTarget);
     alert("Coordinates:"+ event.clientX+ ":" +event.clintY);
};