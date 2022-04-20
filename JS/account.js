
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 3 seconds
}


function open_sidebar() {
    document.getElementById("mysidebar").style.width = "243px";
    document.getElementById("icon_hideslidebar").style.display = "block";
    setTimeout(() => {
       var x = document.getElementById("mysidebar").getElementsByTagName("P");
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "contents";
        
    }
    }, 200);
  }
  function confirm_form(){
    var i = document.getElementById("confirm_form");
    i.classList.toggle('confirm_form');
    setTimeout(() => {
      i.classList.remove('confirm_form');
    },3000);
  }
  // function confirm_form() {
  //   let a = document.querySelector('.footer_input:before');
  //   let i = window.getComputedStyle(a,":before");
  //   let t = i.setProperty("display","block");
  //   console.log(t);
  // }
function close_sidebar() {
    document.getElementById("mysidebar").style.width = "43px";
    document.getElementById("icon_hideslidebar").style.display = "none";
    var x = document.getElementById("mysidebar").getElementsByTagName("P");
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "none";
        
    }
  }