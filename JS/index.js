
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    function myFunction(x) {
      if (x.matches) { // If media query matches
        document.getElementById("nav").style.top = "0px";
      } else {
        document.getElementById("nav").style.top = "-170px";
      }
    }
    
    var x = window.matchMedia("(max-width: 768px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
    
  }
  prevScrollpos = currentScrollPos;
}
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=> {
  navbarLinks.classList.toggle('active')
})


// slider
var slides= document.querySelectorAll('.slide');
var btns= document.querySelectorAll('.btn');
let currentSlide=1;

var manualNav = function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');

        btns.forEach((btn)=>{
            btn.classList.remove('active');

        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        manualNav(i);
        currentSlide=i;
    });
});


var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;
    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((currentSlide)=>{
                currentSlide.classList.remove('active');
            });
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
            if(slides.length==i){
                i=0;
            }
            if(i>=slides.length){
                return;
            }
            repeater();
        },13000);
    }
    repeater();
}
repeat();