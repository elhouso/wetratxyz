document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`You clicked ${button.innerText}`);
    });
});
