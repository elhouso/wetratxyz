document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.3}s`;
            el.classList.add("fade-in");
        }, 100);
    });
});
