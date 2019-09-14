let mainNav = document.getElementById('nav-js');
let navBarToggle = document.getElementById('glasses-hamburger');

navBarToggle.addEventListener('click',  () => {
    mainNav.classList.toggle('active');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-100px";
  }
}