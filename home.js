var slideIndex = 1;

function plusSlides(n) {
  slideIndex = slideIndex += n;
  showSlide(slideIndex);
}

showSlide();

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
  setTimeout(showSlide, 2000);
}

document.onkeydown = function photo(e) {
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

document
  .getElementById("autoshow")
  .addEventListener("click", function timeout() {
  
    setTimeout(function() {
      slideIndex++;
      showSlide(slideIndex);

      return timeout();
    }, 2000);
  });

