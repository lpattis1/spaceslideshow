const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
const slideImg = document.querySelectorAll(".slide");

let current = 0;

rightBtn.addEventListener("click", function () {
  current++;
  if (current > slideImg.length - 1) {
    current = 0;
  }
  slider();
});

leftBtn.addEventListener("click", function () {
  current--;
  if (current < 0) {
    current = slideImg.length - 1;
  }
  slider();
});

function slider() {
  slideImg.forEach(function () {
    for (let i = 0; i < slideImg.length; i++) {
      slideImg[i].style.transform = `translateX(-${current * 100}%)`;
    }
  });
}
