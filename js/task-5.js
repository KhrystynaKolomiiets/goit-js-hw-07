
const mainColor = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");
buttonColor.addEventListener("click", changeMainColor);

function changeMainColor() {
  mainColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
