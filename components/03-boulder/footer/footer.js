import Base from '../../_config/base';

class Footer extends Base {
  constructor(el) {
    super(el);
    const body = document.querySelector('body');
    const darkmodeToggle = el.querySelector('.footer__darklightmode');

    // toggle dark mode
    if (!body.classList.contains('404')) {
      darkmodeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
          body.classList.remove('light-theme');
          body.classList.add('dark-theme');
          darkmodeToggle.classList.add('footer__darklightmode-true');
        } else {
          darkmodeToggle.classList.remove('footer__darklightmode-true');
          body.classList.remove('dark-theme');
          body.classList.add('light-theme');
        }

        if (body.classList.contains('dark-theme')) {
          localStorage.setItem('dark-theme', 'true');
        } else {
          localStorage.setItem('dark-theme', 'false');
        }
      });

      // check if dark mode is enabled
      if (localStorage.getItem('dark-theme') === 'true') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        darkmodeToggle.classList.add('footer__darklightmode-true');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        darkmodeToggle.classList.remove('footer__darklightmode-true');
      }
    }
  }
}

Footer.className = 'Footer';
export default Footer;
