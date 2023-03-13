
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
var next = document.getElementById('sag-ok')
var prev = document.getElementById('sol-ok')
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
next.addEventListener("click",() => NextButton());
prev.addEventListener("click",() => PrevButton());
function NextButton(){
  
  currentSlide++;
  if(currentSlide > 3){
      manualNav(0);
      currentSlide = 0;
  }else{
    manualNav(currentSlide);
    currentSlide = currentSlide;
  }
}
function PrevButton(){
  
  currentSlide--;
  if(currentSlide<0){
      manualNav(3);
      currentSlide = 3;
  }else{
    manualNav(currentSlide);
    currentSlide = currentSlide;
  }
}


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
        },1300000);
    }
    repeater();
}
repeat();
var mediaQueryMobil = window.matchMedia('((max-width: 599px))');
var mediaQueryTablet = window.matchMedia('((min-width: 600px) and (max-width: 1000px))');
var mediaQueryWeb = window.matchMedia('((min-width: 1001px) and (max-width:1366px) )')
window.onresize = function(){
  if (mediaQueryTablet.matches) {
    document.getElementById("sag-ok").classList = "fa-sharp fa-solid fa-arrow-right fa-5x"
    document.getElementById("sol-ok").classList = "fa-sharp fa-solid fa-arrow-left fa-5x"
    
  }
  if (mediaQueryWeb.matches) {
    document.getElementById("sag-ok").classList = "fa-sharp fa-solid fa-arrow-right fa-7x"
    document.getElementById("sol-ok").classList = "fa-sharp fa-solid fa-arrow-left fa-7x"
    
  }
  if (mediaQueryMobil.matches) {
    document.getElementById("sag-ok").classList = "fa-sharp fa-solid fa-arrow-right fa-4x"
    document.getElementById("sol-ok").classList = "fa-sharp fa-solid fa-arrow-left fa-4x"
    
  }
};

