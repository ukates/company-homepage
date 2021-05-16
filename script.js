const hamburger = document.querySelector('.hamburger'); 
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');  

hamburger.addEventListener('click', () => {
    navLeft.classList.toggle('show');
    navRight.classList.toggle('show');  
});