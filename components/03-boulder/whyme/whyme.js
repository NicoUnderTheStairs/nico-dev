import Base from '../../_config/base';

class Whyme extends Base {
  constructor(el) {
    super(el);
    const emailBtn = document.querySelector('.whymedocs__btns--1');
    const emailWrapper = document.querySelector('.whymedocs__email__wrapper');
    const downloadBtn = document.querySelector('.whymedocs__btns--2');
    const downloadWrapper = document.querySelector('.whymedocs__download__wrapper');

    const feedbackBtn = document.querySelector('.whymefeedback__feedbackbtn');

    const toggleBtnWrapper = () => {
      document.querySelector('.whymedocs__btns--active').classList.toggle('whymedocs__btns--active--1');
      document.querySelector('.whymedocs__btns--active').classList.toggle('whymedocs__btns--active--2');
      downloadWrapper.classList.toggle('whymedocs__content--deactive');
      downloadWrapper.classList.toggle('whymedocs__content--active');
      emailWrapper.classList.toggle('whymedocs__content--deactive');
      emailWrapper.classList.toggle('whymedocs__content--active');
    };

    emailBtn.onclick = () => {
      toggleBtnWrapper();
    };

    downloadBtn.onclick = () => {
      toggleBtnWrapper();
    };

    feedbackBtn.onclick = () => {
      document.querySelector('.contact__form').classList.remove('d-none');
      feedbackBtn.classList.add('d-none');
    };

    function adjustFontSize() {
      const element = document.querySelector('.dynamic-text');
      const parentWidth = element.parentElement.offsetWidth;

      let fontSize = 52; // Starting font size
      element.style.fontSize = `${fontSize}px`;

      while (element.offsetWidth > parentWidth && fontSize > 8) {
        fontSize -= 1; // Decrease font size if the text overflows
        element.style.fontSize = `${fontSize}px`;
      }
    }

    window.addEventListener('resize', adjustFontSize);
    window.addEventListener('load', adjustFontSize);
  }
}

Whyme.className = 'Whyme';
export default Whyme;
