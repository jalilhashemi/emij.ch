document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("typing-text");
    const text = element.getAttribute("data-text");
    let index = 0;

    element.textContent = "\u00A0";

    setTimeout(() => {
        element.textContent = "";
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 80);
            }
        }

        type();
    }, 500);
});

const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");
const body = document.body;

// Open menu
burger.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.add("active");
    body.classList.add("nav-open");
    body.style.overflow = "hidden";
});

// Close menu ONLY when clicking overlay
overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("nav-open");
    body.style.overflow = "";
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
        body.classList.remove("nav-open");
        body.style.overflow = "";
    });
});

const navbar = document.querySelector(".navbar");
const hero = document.getElementById("hero");

const heroHeight = hero.offsetHeight;

window.addEventListener("scroll", () => {
    if (window.scrollY > heroHeight - 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Language switcher example
const languageSwitcher = document.getElementById('language-switcher');
languageSwitcher.addEventListener('change', (e) => {
    alert('Switching language to: ' + e.target.value);
});

document.querySelectorAll(".lang").forEach(lang => {
    lang.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelectorAll(".lang").forEach(l => l.classList.remove("active"));
        lang.classList.add("active");

        console.log("Language switched to:", lang.dataset.lang);
    });
});
