const cardList = document.querySelector('.catalog__list');
const cards = cardList.querySelectorAll('.card__item');

const screenWidth = window.screen.width;
const MAX_WIDTH = 1023;

const onCardClick = (evt) => {
  const cardItem = evt.target.closest('.card__item');

  if (cardItem.classList.contains('is-open')) {
    cardItem.classList.remove('is-open');
  } else {
    cards.forEach((item) => {
      item.classList.remove('is-open');
    });
    cardItem.classList.add('is-open');
  }
};

const chooseCardByTouch = () => {

  if (screenWidth <= MAX_WIDTH) {
    cardList.addEventListener('click', onCardClick);
  } else {
    cardList.removeEventListener('click', onCardClick);
  }
};

export {chooseCardByTouch};
