const hamburger = document.getElementsByClassName("hamburger");
const navbar_menu = document.getElementsByClassName("navbar-menu");
const hamburger_close = document.getElementsByClassName("hamburger-close");

const close = () => {
  navbar_menu[0].style.display = "none";
  hamburger[0].style.display = "flex";
  hamburger_close[0].style.display = "none";
};

hamburger[0].addEventListener("click", (e) => {
  navbar_menu[0].style.display = "flex";
  hamburger_close[0].style.display = "flex";
  hamburger[0].style.display = "none";
});

hamburger_close[0].addEventListener("click", (e) => {
  close();
});

const menu = document.getElementsByClassName("menu-item");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", (e) => {
    if (hamburger_close[0].style.display !== "") {
      close();
    }
  });
}

// carousel Effect
var slides = document.getElementsByClassName("carousel-item");
var dots = document.getElementsByClassName("dot");

var slideIndex = 1;
Carousel(slideIndex);

function plusSlides(n) {
  Carousel((slideIndex += n));
}

function currentSlide(n) {
  Carousel((slideIndex = n));
}

function Carousel(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex = n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";

  setTimeout(() => {
    Carousel(slideIndex + 1);
  }, 8000);
}
