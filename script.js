// Generate a random accent color (optional)
const accentColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
document.documentElement.style.setProperty('--accent-color', accentColor);
