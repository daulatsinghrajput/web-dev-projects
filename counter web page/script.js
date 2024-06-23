document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize the counter value to 0
    let counterValue = 0;

    // Get references to the HTML elements
    const numDisplay = document.getElementById('num');
    const incButton = document.getElementById('inc');
    const decButton = document.getElementById('dec');
    const resetButton = document.getElementById('reset');

    // Function to update the displayed counter value
    const updateDisplay = () => {
        numDisplay.textContent = counterValue;
    };

    // Initially display 0
    updateDisplay();

    // Increment button click event
    incButton.addEventListener('click', () => {
        counterValue++;
        updateDisplay();
    });

    // Decrement button click event
    decButton.addEventListener('click', () => {
        counterValue--;
        updateDisplay();
    });

    // Reset button click event
    resetButton.addEventListener('click', () => {
        counterValue = 0;
        updateDisplay();
    });
});
