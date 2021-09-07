const mobMenuIcon = document.querySelector('.mobile-menu-icon');

const mobMenu = document.querySelector('.nav-links');

const darkLightTheme = document.querySelector('.dark-light');

const caretUp = document.querySelector('.fa-angle-up');
const caretDown = document.querySelector('.fa-angle-down');

const subMenu = document.querySelector('.sub-menu');

const fullYear = document.querySelector('.full-year');

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

//full year dynamic setup
fullYear.innerHTML = new Date().getFullYear();

//blog post per page dynamic setup
const paginate = (posts) => {
    const postsPerPage = 9;
    const numberOfPages = Math.ceil(posts.length / postsPerPage);

    const newPosts = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * postsPerPage;
        return posts.slice(start, start + postsPerPage);
    })
    return newPosts;
}