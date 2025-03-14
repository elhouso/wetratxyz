// Generate a random accent color
const accentColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

// Apply the accent color to the CSS variable
document.documentElement.style.setProperty('--accent-color', accentColor);
