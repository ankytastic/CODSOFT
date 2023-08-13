const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");

// Function to handle button clicks and keyboard input
function handleInput(input) {
    if (input === "=") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    } else if (input === "C") {
        display.value = "";
    } else if (input === "." && display.value.includes(".")) {
        return; // Prevent adding multiple decimal points
    } else {
        display.value += input;
    }
}

// Add event listeners to buttons for click events
buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.textContent);
    });
});

// Add event listener for keyboard input
document.addEventListener("keydown", event => {
    const key = event.key;
    const validInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "=", "Enter", "Backspace"];

    if (validInputs.includes(key)) {
        if (key === "Enter") {
            handleInput("=");
        } else if (key === "Backspace") {
            display.value = display.value.slice(0, -1);
        } else {
            handleInput(key);
        }
    }
});

// Add event listeners to operators for click events
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        const lastChar = display.value.slice(-1);

        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            display.value = display.value.slice(0, -1) + operator.textContent;
        } else {
            handleInput(operator.textContent);
        }
    });
});

const backgroundButton = document.getElementById("backgroundButton");
const body = document.body;

let isDayMode = false;

backgroundButton.addEventListener("click", () => {
    if (isDayMode) {
        body.style.backgroundImage = "linear-gradient(to bottom right, #00c0ff, #ff9500)";
        isDayMode = false;
    } else {
        body.style.backgroundImage = "linear-gradient(to bottom right, #001f3f, #999)";
        isDayMode = true;
    }
});
