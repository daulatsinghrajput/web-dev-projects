document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const keyStatus = document.getElementById('keyStatus');

    inputField.addEventListener('keydown', () => {
        keyStatus.textContent = 'Key is pressed';
    });

    inputField.addEventListener('keyup', () => {
        keyStatus.textContent = 'Key is released';
    });
});
