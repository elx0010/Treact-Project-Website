function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}


const sections = document.querySelectorAll('.fade-in--left, .fade-in--right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => observer.observe(section));