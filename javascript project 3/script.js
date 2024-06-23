document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('img');

    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.5)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});
