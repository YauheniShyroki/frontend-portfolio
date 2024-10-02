const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const hamburgerPointerArrow = document.querySelector('.hamburger-pointer__arrow');

function toggleMenuActive(elem) {
    elem.addEventListener('click', () => {
        menu.classList.toggle('active');

        //remove animation after the user clicked
        hamburgerPointerArrow.classList.remove('animate__animated');
    });
}

toggleMenuActive(hamburger);
toggleMenuActive(close);