// Generate a random accent color
const accentColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
document.documentElement.style.setProperty('--accent-color', accentColor);

// Cookies Popup Functionality
const cookiesPopup = document.getElementById('cookies-popup');
const acceptCookiesButton = document.getElementById('accept-cookies');

acceptCookiesButton.addEventListener('click', () => {
    cookiesPopup.style.display = 'none';
});
