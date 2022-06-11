// Появление меню
let button = document.querySelector('.icon-menu');

button.addEventListener('click', function (e) {
  let navList = document.querySelector('.menu__list');
  navList.classList.toggle('_active');
});



// переход к разделам меню
const menuBut = document.querySelectorAll('.menu__link[data-goto]');
if (menuBut.length > 0) {
  for (let i = 0; i < menuBut.length; i++) {
    const but = menuBut[i];
    but.addEventListener('click', menuClick);
  };


  function menuClick(e) {
    const button = e.target;
    if (button.dataset.goto && document.querySelector(button.dataset.goto)) {
      const block = document.querySelector(button.dataset.goto);
      const gotoBlockValue = block.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.header').offsetHeight;;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
