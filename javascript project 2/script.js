document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('colorBox');

    colorBox.addEventListener('dblclick', () => {
        colorBox.style.backgroundColor = colorBox.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
    });
});
