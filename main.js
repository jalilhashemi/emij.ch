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

// block scrolling when menu open
const navbar = document.querySelector(".navbar");
const hero = document.getElementById("header-container");

const heroHeight = hero.offsetHeight;

window.addEventListener("scroll", () => {
    if (window.scrollY > heroHeight - 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Language switcher
//const languageSwitcher = document.getElementById('language-switcher');
//if (languageSwitcher) {
 //   languageSwitcher.addEventListener("click", function () {
 //       languageSwitcher.addEventListener('change', (e) => {
 //           alert('Switching language to: ' + e.target.value);
 //       });    });
//}


//document.querySelectorAll(".lang").forEach(lang => {
 //   lang.addEventListener("click", (e) => {
  //      e.preventDefault();

  //      document.querySelectorAll(".lang").forEach(l => l.classList.remove("active"));
   //     lang.classList.add("active");

   //     console.log("Language switched to:", lang.dataset.lang);
  //  });
//});

emailjs.init("dEJTQHjphxVX2xMsB");

// Get the form element
const contactForm = document.getElementById("contact-form");
const hint = document.getElementById("form-hint");
const emailError = document.getElementById("email-error");


contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // stop default submission

    let isValid = true;
    let firstEmpty = null; // track first empty field

    // Check all required fields
    this.querySelectorAll("[required]").forEach(input => {
        input.style.borderColor = "#ccc"; // reset if filled
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = "red"; // highlight
            if (!firstEmpty) firstEmpty = input; // focus later

            //if (input.type === "email") emailError.textContent = "* Required";

        }

    // Additional email format check
    if (input.type === "email" && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
            isValid = false;
            input.style.borderColor = "red";
            if (!firstEmpty) firstEmpty = input;

            emailError.textContent = "Please enter a valid email address";

        }else {
            emailError.textContent = "";

        }
    }
});

    if (!isValid) {
        // Show hint if any required field is empty
        hint.style.display = "block";
        if (firstEmpty) firstEmpty.focus(); // focus first empty field
        return; // STOP HERE, do NOT send EmailJS
    }

    // All fields filled → hide hint
    //hint.style.display = "none";

    emailjs.sendForm("service_3q75bg9", "template_qviaa2a", this)
        .then(() => {
            alert("Message sent successfully!");
            contactForm.reset(); // Clear the form
            this.querySelectorAll("[required]").forEach(input => input.style.borderColor = "#ccc");
        }, (error) => {
            alert("Failed to send message.");
            console.log(error);
        });
});


