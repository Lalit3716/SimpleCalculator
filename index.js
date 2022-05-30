const buttons = document.querySelectorAll(".button");
const input = document.querySelector("#input");
const preview = document.querySelector(".preview > span");

const operators = ["+", "-", "×", "÷", "%"];

const anim = [
  { transform: "translateY(50px)", "font-size": "1.8rem" },
  {
    transform: "translateY(0px)",
    "font-size": "1rem",
  },
];

const animSettings = {
  duration: 500,
  iterations: 1,
  easing: "ease-out",
};

const calculate = expr => {
  expr = expr.replaceAll("÷", "/");

  try {
    input.value = eval(expr);
  } catch (err) {
    input.value = "Syntax Error";
  }

  preview.parentElement.animate(anim, animSettings);
  preview.innerText = expr.replaceAll("*", "×").replaceAll("/", "÷");
};

input.addEventListener("keydown", e => {
  if (e.keyCode === 13) {
    if (input.value.trim() === "") return;
    calculate(input.value);
  }
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (
      parseInt(button.innerText) ||
      button.innerText === "0" ||
      button.innerText === "."
    ) {
      input.value += button.innerText;
    } else if (button.innerText === "C") {
      input.value = "";
      preview.innerText = "";
    } else if (operators.includes(button.innerText)) {
      input.value += button.innerText;
    } else if (button.innerText === "=") {
      if (input.value.trim() === "") return;
      const expr = input.value.replaceAll("×", "*");
      calculate(expr);
    } else {
      input.value = input.value.slice(0, -1);
    }
  });
});
