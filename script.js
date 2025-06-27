let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Exibe o primeiro slide
showSlide(currentSlide);

// Inicia o carrossel automático a cada 3 segundos
setInterval(nextSlide, 3000);
