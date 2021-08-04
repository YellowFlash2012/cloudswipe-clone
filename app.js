const mobMenuIcon = document.querySelector('.mobile-menu-icon');

const mobMenu = document.querySelector('.nav-links');

const darkLightTheme = document.querySelector('.dark-light');

//open/close mobile menu
mobMenuIcon.addEventListener('click', () => {
    
    mobMenu.classList.toggle('show');
})

//toggle light/dark theme
darkLightTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})