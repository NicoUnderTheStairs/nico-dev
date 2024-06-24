import Base from '../../_config/base';

class Footer extends Base {
  constructor(el) {
    super(el);
    const body = document.querySelector('body');
    const darkmodeToggle = el.querySelector('.footer__darklightmode');
    const imageToggleParents = [...document.querySelectorAll('.imageToggles__wrapper')];

    // toggle dark mode
    if (!body.classList.contains('404')) {
      darkmodeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
          body.classList.remove('light-theme');
          body.classList.add('dark-theme');
          darkmodeToggle.classList.add('footer__darklightmode-true');
          if (imageToggleParents[0] !== null) {
            imageToggleParents.forEach((imageToggle) => {
              imageToggle.classList.add('imageToggles-dark');
            });
          }
        } else {
          if (imageToggleParents[0] !== null) {
            imageToggleParents.forEach((imageToggle) => {
              imageToggle.classList.remove('imageToggles-dark');
            });
          }
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
        // dark
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        darkmodeToggle.classList.add('footer__darklightmode-true');
        if (imageToggleParents[0] !== null) {
          imageToggleParents.forEach((imageToggle) => {
            imageToggle.classList.add('imageToggles-dark');
          });
        }
      } else {
        // light
        if (imageToggleParents[0] !== null) {
          imageToggleParents.forEach((imageToggle) => {
            imageToggle.classList.remove('imageToggles-dark');
          });
        }
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        darkmodeToggle.classList.remove('footer__darklightmode-true');
      }
    }
  }
}

Footer.className = 'Footer';
export default Footer;
