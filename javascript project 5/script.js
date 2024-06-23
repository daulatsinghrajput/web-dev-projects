document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const lastKey = document.getElementById('lastKey');

    inputField.addEventListener('keypress', (event) => {
        lastKey.textContent = event.key;
    });
});
