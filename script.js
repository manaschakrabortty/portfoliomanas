
var typed = new Typed(".text", {
    strings: ["Programming","Ai", "Developement", "coding", "web development", "exploring new technologies and frameworks"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

h1=document.querySelector("h1")
setTimeout(() => {
    h1.style.color ="#0ef";
},4000);

