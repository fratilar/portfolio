function toggle(){
   var hamburger = document.querySelector(".hamburger");
   var menu = document.querySelector(".menu");
   hamburger.classList.toggle("active");
   menu.classList.toggle("active");
}

window.addEventListener("scroll", function(){
   var header = document.querySelector(".navbar");
   header.classList.toggle("sticky", window.scrollY > 0);
})