import Base from '../../_config/base';

class Hero extends Base {
  constructor(el) {
    super(el);
    const allPhones = [...el.querySelectorAll('.phone')];

    window.onload = () => {
      // add class to el
      el.classList.add('hero__intro');
    };

    allPhones.forEach((phone) => {
      // scroll event
      document.addEventListener('scroll', () => {
        // get y position of window
        const y = window.scrollY;
        // random variable between 0.05 and 0.2, round to 2 decimal places
        phone.querySelector('.phonerect').style.transform = `translateY(-${y * 0.15}px)`;
      });
    });
  }
}

Hero.className = 'Hero';
export default Hero;
