let display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value); // Use eval to evaluate the expression
    } catch (error) {
        display.value = 'Error'; // If invalid expression, show "Error"
    }
}
