window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000);
    }, 2000);
});