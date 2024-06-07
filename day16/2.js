
let centerX=document.documentElement.clientWidth/2;
let centerY=document.documentElement.click/2;
let elem=document.elementFromPoint(centerX,centerY);
elem.computedStyleMap.background="red";
alert(elem.tagName);
