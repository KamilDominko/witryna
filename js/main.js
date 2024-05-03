window.addEventListener('load', () => {
  const menuBtnNode = document.querySelector('.menu__btn');

  menuBtnNode.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const menuNode = document.querySelector('.menu');
    if (menuNode.classList.contains('menu-visible')) {
      menuNode.classList.remove('menu-visible');
      menuNode.classList.add('menu-hidden');
    } else {
      menuNode.classList.add('menu-visible');
      menuNode.classList.remove('menu-hidden');
    }
  })
})