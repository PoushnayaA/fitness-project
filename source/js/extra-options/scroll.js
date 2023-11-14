const links = document.querySelectorAll('a[href^="#"]');

const initScroll = () => {
  console.log("1");
  console.log("1");
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
