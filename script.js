// JavaScript (script.js)
let buttons = document.querySelectorAll("button");
let colorDisplay = document.getElementById("color-display");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let color = buttons[i].id;
    if (color === "colorless") {
      colorDisplay.style.backgroundColor = "white";
      colorDisplay.textContent = "colorless";
    } else {
      colorDisplay.style.backgroundColor = color;
      colorDisplay.textContent = color;
    }
  });
}
