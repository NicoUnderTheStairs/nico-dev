import Base from '../../_config/base';

class Header extends Base {
  constructor(el) {
    super(el);
    const hamburger = el.querySelector('.header__hamburger');

    if (hamburger === null) return;

    const nav = el.querySelector('.header__nav');
    const body = document.querySelector('body');

    const toggleNav = () => {
      if (nav.classList.contains('header__nav--open')) {
        nav.classList.remove('header__nav--open');
        hamburger.classList.remove('header__hamburger--open');
        body.classList.remove('no-scroll');
      } else {
        nav.classList.add('header__nav--open');
        hamburger.classList.add('header__hamburger--open');
        body.classList.add('no-scroll');
      }
    };

    hamburger.onclick = (e) => {
      e.preventDefault();
      toggleNav();
    };
  }
}

Header.className = 'Header';
export default Header;
