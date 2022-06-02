// DOM Elements
const buttons = document.querySelectorAll(".button");
const card = document.querySelector(".card");
const historyContainer = document.querySelector(".history");
const openHistory = document.querySelector(".open-history");
const closeHistory = document.querySelector(".close-history");
const input = document.querySelector("#input");
const preview = document.querySelector(".preview > span");

// Variables
let expression = "";
const operators = ["+", "-", "*", "÷", "%"];
const funcs = ["sin", "cos", "tan", "log10", "ln"];
const constants = ["π"];

// Helper Functions
const round = (value, precision) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

const addHistoryToDOM = (expression, result) => {
  const historyItem = document.createElement("li");
  historyItem.innerHTML = `<span class="list-style">-></span> <span class="exp">${expression}</span> = <span class="result">${result}</span>`;
  historyContainer.querySelector("ul").appendChild(historyItem);
};

const calculate = () => {
  let temp;
  try {
    temp = input.value;
    input.value = round(eval(expression), 10);
    expression = input.value;
  } catch (err) {
    input.value = "Syntax Error";
  }
  preview.parentElement.animate(previewAnim, previewAnimSettings);
  addHistoryToDOM(temp, input.value);
  preview.innerText = temp;
};

// Animation Configuration for expression preview text
const previewAnim = [
  {
    transform: "translateY(50px)",
    "font-size": "1.8rem",
  },
  {
    transform: "translateY(0px)",
    "font-size": "1rem",
  },
];

const previewAnimSettings = {
  duration: 500,
  iterations: 1,
  easing: "ease-out",
};

// Event Listeners
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.id === "backspace") {
      expression = expression.slice(0, -1);
      input.value = input.value.slice(0, -1);
    } else if (
      parseInt(button.innerText) ||
      "().0".includes(button.innerText)
    ) {
      input.value += button.innerText;
      expression += button.innerText;
    } else if (button.innerText === "AC") {
      input.value = "";
      expression = "";
      preview.innerText = "";
    } else if (operators.includes(button.innerText)) {
      if (button.innerText === "%") {
        input.value += "*0.01*";
        expression += "*0.01*";
      } else {
        input.value += button.innerText;
        if (button.innerText === "÷") {
          expression += " / ";
        } else {
          expression += button.innerText;
        }
      }
    } else if (button.innerText === "=") {
      if (input.value.trim() === "") return;
      calculate();
    } else if (funcs.includes(button.id)) {
      input.value += `${button.id}(`;
      if (button.id === "ln") {
        expression += "2.303 * Math.log10(";
      } else {
        expression += `Math.${button.id}(`;
      }
    } else if (constants.includes(button.id)) {
      input.value += button.id;
      expression += `Math.${button.id === "π" ? "PI" : button.id}`;
    } else if (button.id === "pow") {
      input.value += "^";
      expression += "**";
    }
  });
});

openHistory.addEventListener("click", () => {
  historyContainer.classList.add("animate-history");
  historyContainer.classList.remove("animate-history-reverse");
});

closeHistory.addEventListener("click", () => {
  historyContainer.classList.remove("animate-history");
  historyContainer.classList.add("animate-history-reverse");
});
