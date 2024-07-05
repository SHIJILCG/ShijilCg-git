document.addEventListener('scroll',function(){
     const addrboxtop= document.querySelector('.search#addrboxtop');
     const scrollHeight=220;
     if(window.scrollY >= scrollHeight){
        addrboxtop.classList.remove('hidden');
        addrboxtop.classList.add('visible');
     }else{
        addrboxtop.classList.remove('visible');
        addrboxtop.classList.add('hidden');
     }
})