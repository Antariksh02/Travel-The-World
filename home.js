var open = document.querySelector("#open");
var close = document.querySelector("#close");
var navlist = document.querySelector(" .navlist");
open.addEventListener("click",()=>{
    navlist.style.transform="translateY(40%)"
})

close.addEventListener("click",()=>{
    navlist.style.transform="translateY(-100%)"
})