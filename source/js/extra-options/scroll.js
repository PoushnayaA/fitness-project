const links = document.querySelectorAll('a[href^="#"]');

const initScroll = () => {
  links.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
};

export {initScroll};
