let scrollContainer = document.querySelector('.gallery');
let slides = Array.from(document.querySelector('.gallery').children);
let currentSlide = 0;

function sizeAdjust() {
  slides.forEach(slide => {
    slide.style.transform = 'scale(1)'
  })
  slides[currentSlide].style.transform = 'scale(1.04)';
}

scrollContainer.addEventListener('wheel', e => {
  e.preventDefault();
})

window.onload = function() {
  sizeAdjust();
  document.querySelectorAll('.slider').forEach(item => {
    item.addEventListener('click', () => {

      if(currentSlide < slides.indexOf(item)) {
        currentSlide++;
        scrollContainer.scrollLeft += item.clientWidth;
      } else if(currentSlide > slides.indexOf(item)) {
        currentSlide--;
        scrollContainer.scrollLeft -= item.clientWidth;
      }
      
      sizeAdjust();
    })
  })
};



