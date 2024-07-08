import Base from '../../_config/base';

class Hero extends Base {
  constructor(el) {
    super(el);
    const allPhones = [...el.querySelectorAll('.phone')];

    allPhones.forEach((phone) => {
      // scroll event
      document.addEventListener('scroll', () => {
        // get y position of window
        const y = window.scrollY;
        // random variable between 0.05 and 0.2, round to 2 decimal places
        phone.querySelector('.phonerect').style.transform = `translateY(-${y * 0.15}px)`;
      });
    });

    if (localStorage.getItem('cowHint') === 'true') {
      el.querySelector('.easteregg__herotext').classList.remove('d-none');
      localStorage.setItem('heroHint', 'true');
    }
  }
}

Hero.className = 'Hero';
export default Hero;
