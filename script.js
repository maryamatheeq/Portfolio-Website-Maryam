function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

    document.addEventListener("DOMContentLoaded", function () {
        const typingTextElement = document.querySelector('.typing-text');
        const fullText = "Electrical Engineering Student";
        const partialTextLength = 12; // Number of characters to keep during erasing
        let index = 0;
        let isDeleting = false;
    
        function type() {
            if (isDeleting) {
                typingTextElement.textContent = fullText.slice(0, index) + "|";
                index--;
                if (index === partialTextLength) { // Stop erasing when partially deleted
                    isDeleting = false;
                }
            } else {
                typingTextElement.textContent = fullText.slice(0, index) + "|";
                index++;
                if (index > fullText.length) { // Start erasing once fully typed
                    isDeleting = true;
                }
            }
            setTimeout(type, isDeleting ? 100 : 150); // Adjust typing speed
        }
    
        type();
    });

document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll("section");
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("appear");
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            });
        }, {
            threshold: 0.2, // Trigger when 20% of the section is in view
        });
    
        sections.forEach(section => observer.observe(section));
    });

