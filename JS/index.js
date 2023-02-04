
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
