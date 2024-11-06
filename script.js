document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".content, .section-title, .project-card");
    const scrollBar = document.getElementById("scrollBar");

    const showOnScroll = () => {
        contents.forEach(content => {
            const rect = content.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                content.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", showOnScroll);

    scrollBar.addEventListener("click", () => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    });
});
// Get all links in the navbar
const navLinks = document.querySelectorAll('.nav-link');

// Detect which section is currently in the viewport
window.addEventListener('scroll', () => {
    let currentSection = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    // Set active class to the navbar links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll to the section when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(`#${link.getAttribute('data-section')}`);
        window.scrollTo({
            top: target.offsetTop - 70, // offset for fixed navbar
            behavior: 'smooth'
        });
    });
});
