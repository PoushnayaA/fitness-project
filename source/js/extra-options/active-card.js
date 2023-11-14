const cards = document.querySelectorAll('[data-price-card="price-card"]');
const cardsList = document.querySelectorAll('[data-price-card="price-pagination"]');

const cardsArray = Array.from(cards);
const cardsListArray = Array.from(cardsList);

const changeActiveCard = (card) => {
  if (cards) {
    cards.forEach((element) => {
      if (element.classList.contains('price__card--active')) {
        element.classList.remove('price__card--active');
        element.querySelector('button').classList.remove('button--main');
        element.querySelector('button').classList.remove('button--light');
      }
    });
    cardsArray[card].classList.add('price__card--active');
    cardsArray[card].querySelector('button').classList.add('button--main');
  }
};

const initActiveCard = () => {
  cardsListArray.forEach((list) => {

    list.addEventListener('click', () => {
      for (let i = 1; i < cardsArray.length; i++) {
        cardsArray[i].classList.add('price__card--active');
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
