let addi_info = document.querySelector(".additional-Information");
let addi_info2 = document.querySelector(".additional-Information-2");
let addi_info3 = document.querySelector(".additional-Information-3");
let body = document.querySelector("body");
let button1 = document.querySelector(".button-1");
let button2 = document.querySelector(".button-2");
let button3 = document.querySelector(".button-3");
const jsButtons = document.querySelectorAll(`.js-slider-button`);

button1.onclick = function () {
  addi_info.style.display = "block";
  addi_info2.style.display = "none";
  addi_info3.style.display = "none";
};

button2.onclick = function () {
  addi_info.style.display = "none";
  addi_info2.style.display = "block";
  addi_info3.style.display = "none";
};

button3.onclick = function () {
  addi_info3.style.display = "block";
  addi_info.style.display = "none";
  addi_info2.style.display = "none";
};
