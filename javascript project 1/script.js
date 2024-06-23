document.addEventListener('DOMContentLoaded', () => {
    const clickBtn = document.getElementById('clickBtn');
    const clickCount = document.getElementById('clickCount');
    let count = 0;

    clickBtn.addEventListener('click', () => {
        count++;
        clickCount.textContent = count;
    });
});
