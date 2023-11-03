var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".page2");
var page3 = document.querySelector(".page3");
var page4 = document.querySelector(".page4");
 var pg1 = document.getElementById("pg1");
 var pg2 = document.getElementById("pg2");


 pg1.addEventListener("click",()=>{
    page1.style.transform="translateX(0%)"
    page2.style.transform="translateX(-100%)"
})


pg2.addEventListener("click",()=>{
    page1.style.transform="translateX(-100%)"
    page2.style.transform="translateX(0%)"
})


var filter = document.querySelector(".filter");
var leftsec = document.querySelector(".left-sec");
var close = document.querySelector(".close");


filter.addEventListener("click",()=>{
    leftsec.style.transform="translateX(0%)"
})

close.addEventListener("click",()=>{
    leftsec.style.transform="translateX(-100%)"
})



