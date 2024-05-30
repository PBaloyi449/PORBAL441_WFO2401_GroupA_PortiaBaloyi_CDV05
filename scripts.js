document.addEventListener('DOMContentLoaded', function() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'pink'];
    let currentColorIndex = 0;

    const headings = document.querySelectorAll('.colorful-heading'); // Corrected selector

    setInterval(function() {
        headings.forEach(heading => {
            heading.style.color = colors[currentColorIndex];
        });
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 1000); // 1000 milliseconds = 1 second

    // Handle section visibility
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Dynamically update bar widths if needed
    document.querySelector('.html').style.width = '48.1%';
document.querySelector('.css').style.width = '46.9%';
document.querySelector('.js').style.width = '5.0%';

    // Show the first section by default
    showSection('projects');
});
