const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const hamburgerPointerArrow = document.querySelector('.hamburger-pointer__arrow');
const menuLinks = document.querySelectorAll('.menu__link');

function toggleMenuActive(elem) {
    elem.addEventListener('click', () => {
        menu.classList.toggle('active');

        //remove animation after the user clicked
        hamburgerPointerArrow.classList.remove('animate__animated');
        hamburgerPointerArrow.classList.remove('animate__headShake');
        hamburgerPointerArrow.classList.remove('animate__infinite');
    });
}

toggleMenuActive(hamburger);
toggleMenuActive(close);
menuLinks.forEach(link => {toggleMenuActive(link)});