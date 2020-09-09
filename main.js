// Menu button on smaller screen

var menuBtn = document.querySelector(".menu-btn");
var clicked = false; /*buton oprit*/
var responsive = document.querySelector(".responsive");

menuBtn.addEventListener("click", function () {
  if (!clicked) {
    menuBtn.classList.add("open");
    clicked = true;
    responsive.style.display = "block";
  } else {
    menuBtn.classList.remove("open");
    clicked = false;
    responsive.style.display = "none";
  }
});

// Buton to Top
// Show button
var butonTop = document.querySelector(".btnToTop");
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    butonTop.style.display = "flex";
  } else {
    butonTop.style.display = "none";
  }
};
// scroll to top function
function scrollToTop() {
  document.body.scrollTop = 0; /*pt. safari*/
  document.documentElement.scrollTop = 0; /*pt. chrome...*/
}

// Butoane carousel

var butoane = document.querySelectorAll(".carusel");

for(var i=0; i<butoane.length; i++){
  butoane[i].addEventListener("click",function(){
    var active = document.querySelector(".active2");
    active.classList.remove("active2");
    this.classList.add("active2");
  })
}

var butoane2 = document.querySelectorAll(".carusel2");

butoane2.forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelector(".active21").classList.remove("active21");
    el.classList.add("active21");
  });
});

// Filter Elements
var listItems = document.querySelectorAll(".navItems2");
var gridItems = document.querySelectorAll(".grid-box");

for(var j=0; j<listItems.length; j++){
  listItems[j].addEventListener("click",function(){
    var value = this.getAttribute("data-filter");
    for(var k=0; k<gridItems.length; k++){
      if(gridItems[k].className.includes(value)|| value=="all"){
        gridItems[k].style.display="grid";
      }else{
        gridItems[k].style.display="none";
      }
    }
  })

// add active class to selected item
  listItems[j].addEventListener("click",function(){
    var activ = document.querySelector(".actives");
    activ.classList.remove("actives");
    this.classList.add("actives");
  })
}