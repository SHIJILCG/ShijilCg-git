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
     const headetoppartscroll=document.getElementById('heade-top-part-scroll');
     if(window.scrollY>0){
      headetoppartscroll.style.backgroundColor='white';
     }else{
      headetoppartscroll.style.backgroundColor='transparent';
     }

     const headetoppartaddrpart= document.querySelector('.find#heade-top-part-addr-part');
     if(window.scrollY >100){
        headetoppartaddrpart.classList.remove('hide');
        headetoppartaddrpart.classList.add('show');
     }else{
        headetoppartaddrpart.classList.remove('show');
        headetoppartaddrpart.classList.add('hide');
     }
});

