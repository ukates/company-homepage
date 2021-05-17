/*const hamburger = document.querySelector('.hamburger'); 
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');  

hamburger.addEventListener('click', () => {
    navLeft.classList.toggle('show');
    navRight.classList.toggle('show');  
});*/

const menuBtn = document.querySelector('.hamburger'); 
const closeBtn = document.querySelector('.closebtn');
const slideMenu = document.querySelector('.slidemenu'); 

menuBtn.addEventListener('click', () => {
    slideMenu.classList.toggle('open');
}); 

closeBtn.addEventListener('click', () => {
    slideMenu.classList.toggle('open'); 
}); 