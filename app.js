const mobMenuIcon = document.querySelector('.mobile-menu-icon');

const mobMenu = document.querySelector('.nav-links');

const darkLightTheme = document.querySelector('.dark-light');

const caretUp = document.querySelector('.fa-angle-up');
const caretDown = document.querySelector('.fa-angle-down');

const subMenu = document.querySelector('.sub-menu');

//open/close mobile menu
mobMenuIcon.addEventListener('click', () => {
    
    mobMenu.classList.toggle('show');
})

//toggle light/dark theme
darkLightTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

//open/close submenu with caret
caretDown.addEventListener('click', () => {
    subMenu.style.display = 'block';
    
    caretDown.innerHTML = `<i hidden class="fas fa-angle-up"></i>`;

    caretUp.style.display = 'block';
})

caretUp.addEventListener('click', () => {
    subMenu.style.display = 'none';

    caretUp.innerHTML = `<i hidden class="fas fa-angle-down"></i>`;
  
})