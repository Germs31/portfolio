let mainNav = document.getElementById('nav-js');
let navBarToggle = document.getElementById('glasses-hamburger');

navBarToggle.addEventListener('click',  () => {
    mainNav.classList.toggle('active');
});