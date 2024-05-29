document.addEventListener('DOMContentLoaded', function() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'pink'];
    let currentColorIndex = 0;

    const heading = document.getElementById('colorful-heading');

    setInterval(function() {
        heading.style.color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 1000); // 1000 milliseconds = 1 second

    // Handle section visibility
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Show the first section by default
    showSection('home');
});
