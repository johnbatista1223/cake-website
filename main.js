let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
  console.log('button working')
  navbar.classList.toggle('active')
}

// scroll up and down
window.onscroll = () => {
  navbar.classList.remove('active')
}
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

// next button for each slide
function next(){
  console.log('next working')
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}
function prev(){
   console.log('prev  working')
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}
const nextButton = document.getElementById('next-slide').addEventListener('click',next)
const prevButton = document.getElementById('prev-slide').addEventListener('click',prev)