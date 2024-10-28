function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateLogoSource(theme) {
    const logo = document.getElementById('logo');
    if (logo) {
        logo.src = theme === 'dark' ? 'assets/logo-dark.svg' : 'assets/logo-light.svg';
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    updateLogoSource(theme);
    
    localStorage.setItem('theme', theme);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(getSystemTheme());
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

document.addEventListener('DOMContentLoaded', initializeTheme);

const logo = document.getElementById('logo');
if (logo) {
    logo.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

function checkThemeStatus() {
    console.log({
        systemPrefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
        currentTheme: document.documentElement.getAttribute('data-theme'),
        savedTheme: localStorage.getItem('theme')
    });
}