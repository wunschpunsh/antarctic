const mainHeader = document.querySelector('.main-header');
const menuButton = mainHeader.querySelector('.main-header__button');
const outside = mainHeader.querySelector('.main-header__overlay');
const menuItem = mainHeader.querySelectorAll('.main-nav__link');


const onCloseMenuOutsideClick = (evt) => {
  menuItem.forEach((item) => {
    if (evt.target === item || evt.target === outside) {
      toggleMenuParam('close');
    }
  });
};

const toggleMenuParam = (param) => {
  if (param === 'open') {
    document.addEventListener('click', onCloseMenuOutsideClick);
    document.body.classList.add('scroll-lock');
  }

  if (param === 'close') {
    mainHeader.classList.remove('show-menu');
    document.body.classList.remove('scroll-lock');
    document.removeEventListener('click', onCloseMenuOutsideClick);
  }
};

const toggleMenu = () => {
  menuButton.addEventListener('click', () => {
    mainHeader.classList.toggle('show-menu');

    if (mainHeader.classList.contains('show-menu')) {
      toggleMenuParam('open');
    } else {
      toggleMenuParam('close');
    }
  });
};
export {toggleMenu};
