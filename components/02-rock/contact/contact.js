import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Base from '../../_config/base';

class Contact extends Base {
  constructor(el) {
    super(el);
    gsap.registerPlugin(ScrollTrigger);

    const contactOpen = el.querySelector('.contact__open');
    const formWrapper = el.querySelector('.contact__form__wrapper');

    gsap.set(el.querySelector('.contact__talk--1'), {
      x: '-100%',
    });

    gsap.to(el.querySelector('.contact__talk--1'), {
      x: '0%',
      scrollTrigger: {
        scrub: true,
        delay: 1,
        ease: 'back.out(1.7)',
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    gsap.set(el.querySelector('.contact__talk--2'), {
      x: '0%',
    });

    gsap.to(el.querySelector('.contact__talk--2'), {
      x: '-100%',
      scrollTrigger: {
        scrub: true,
        delay: 1,
        ease: 'back.out(1.7)',
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    contactOpen.onclick = () => {
      if (formWrapper.classList.contains('d-none')) {
        formWrapper.classList.remove('d-none');
        // focus on first input
        formWrapper.querySelector('input').focus();
      }
    };
  }
}

Contact.className = 'Contact';
export default Contact;
