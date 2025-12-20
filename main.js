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
                setTimeout(type, 100); // typing speed (ms)
            }
        }

        type();
    }, 2000);
});