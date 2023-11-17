const cards = document.querySelectorAll('[data-price-card="price-card"]');
const cardsList = document.querySelectorAll('[data-price-card="price-pagination"]');

const cardsArray = Array.from(cards);
const cardsListArray = Array.from(cardsList);

const changeActiveCard = (card) => {
  if (cards) {
    cards.forEach((element) => {
      if (element.classList.contains('price__card--active')) {
        element.classList.remove('price__card--active');
        element.querySelector('a').classList.remove('button--main');
      }
    });
    cardsArray[card].classList.add('price__card--active');
    cardsArray[card].querySelector('a').classList.add('button--main');
  }
};

const initActiveCard = () => {
  cardsListArray.forEach((list) => {

    list.addEventListener('click', () => {
      for (let i = 1; i < cardsArray.length; i++) {
        cardsArray[i].classList.add('price__card--active');
        cardsArray[i].querySelector('a').classList.add('button--main');
        i++;
        i++;
      }
    });
  });

  cardsArray.forEach((element) => {
    element.addEventListener('click', () => {
      changeActiveCard(cardsArray.indexOf(element));
    });
  });
};

export {initActiveCard};
