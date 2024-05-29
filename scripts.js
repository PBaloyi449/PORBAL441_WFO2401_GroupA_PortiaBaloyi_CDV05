document.addEventListener('DOMContentLoaded', function() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'pink'];
    let currentColorIndex = 0;

    const heading = document.getElementById('colorful-heading');

    setInterval(function() {
        heading.style.color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 1000); // 1000 milliseconds = 1 second
});