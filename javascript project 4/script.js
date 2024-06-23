document.addEventListener('DOMContentLoaded', () => {
    const hoverText = document.getElementById('hoverText');

    hoverText.addEventListener('mouseout', () => {
        hoverText.style.visibility = 'hidden';
    });

    hoverText.addEventListener('mouseover', () => {
        hoverText.style.visibility = 'visible';
    });
});
