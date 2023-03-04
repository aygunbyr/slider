const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 0;
const length = images.length;

const gotoSlide = (slideNumberParam) => {
  slideNumber = slideNumberParam;
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
};

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBackgrounds = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBackgrounds();
    buttons[i].style.backgroundColor = "white";
    gotoSlide(i);
  });
});

right.addEventListener("click", () => {
  slideNumber < length - 1 ? gotoSlide(slideNumber + 1) : gotoSlide(0);
  resetBackgrounds();
  slideNumber < length
    ? (buttons[slideNumber].style.backgroundColor = "white")
    : (buttons[0].style.backgroundColor = "white");
});

left.addEventListener("click", () => {
  slideNumber > 0 ? gotoSlide(slideNumber - 1) : gotoSlide(length - 1);
  resetBackgrounds();
  slideNumber >= 0
    ? (buttons[slideNumber].style.backgroundColor = "white")
    : (buttons[length - 1].style.backgroundColor = "white");
});
