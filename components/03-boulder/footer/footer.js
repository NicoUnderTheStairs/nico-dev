import { playerScoreUpdate } from '../../_config/utils';
import Base from '../../_config/base';

class Footer extends Base {
  constructor(el) {
    super(el);
    const body = document.querySelector('body');
    const darkmodeToggle = el.querySelector('.footer__darklightmode');
    const imageToggleParents = [...document.querySelectorAll('.imageToggles__wrapper')];
    const footerEasterEgg = el.querySelector('.footer__easteregg');
    // get current page
    const currentPage = window.location.pathname;
    const easterEgg = document.querySelector('.laknsdow');

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
        if (localStorage.getItem('heroHint') === 'true' && currentPage === '/projects/itsec4kmu' && document.querySelector('body').classList.contains('dark-theme')) {
          easterEgg.classList.remove('d-none');
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
        if (localStorage.getItem('heroHint') === 'true' && currentPage === '/projects/itsec4kmu' && document.querySelector('body').classList.contains('dark-theme')) {
          easterEgg.classList.remove('d-none');
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

    if (localStorage.getItem('questState') === 'true' && currentPage === '/projects/nico.fortino.ch') {
      footerEasterEgg.classList.remove('d-none');
    }

    footerEasterEgg.onclick = () => {
      localStorage.setItem('copperTreasure', 'open');
      // eslint-disable-next-line no-alert
      alert('You have opened the first treasure. In it, you find two quarters and a note. The note reads: "The next key is hidden where no pages are found. Under moonlights silver bow, I quietly stole the neighbors cow. Now she is grazing on my lawn, with the sunrise, she will be gone.."');
      playerScoreUpdate(10050);
    };
  }
}

Footer.className = 'Footer';
export default Footer;
