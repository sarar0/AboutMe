var slideIndex = 1;

function plusSlides(n) {
  slideIndex = slideIndex += n;
  showSlide(slideIndex);
}

showSlide(1);

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

autoShow();

function autoShow() {
  var i;

  var slides = document.getElementsByClassName("slides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  slideIndex++;
  setTimeout(autoShow, 3000);
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      slideIndex--;
      showSlide(slideIndex);
      break;
    case 39:
      e.preventDefault();
      slideIndex++;
      showSlide(slideIndex);
      break;
  }
};

