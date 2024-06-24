alert(window.innerWidth);
alert(document.documentElement.clientWidth);
let scrollHeight=Math.max(
    document.body.scrollHeight,document.documentElement.scrollHeight,
    document.body.offsetHeight,document.documentElement.offsetHeight,
    document.body.clientHeight,document.documentElement.clientHeight,
);
alert('Full document heignt,with scrolled out part'+scrollHeight);
alert('Current scroll from the top:'+window.pageYOffset);
alert('Current scroll from the left'+window.pageXOffset);
scrollBy(x-coords,y-coords)
scrollBy(Option)
