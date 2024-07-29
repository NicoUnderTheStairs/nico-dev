import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Base from '../../_config/base';

class Contact extends Base {
  constructor(el) {
    super(el);
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(el.querySelector('.contact__talk--1'), {
      x: '-100%',
    });

    gsap.to(el.querySelector('.contact__talk--1'), {
      x: '0%',
      scrollTrigger: {
        scrub: 0.5,
        delay: 0.5,
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
        scrub: 0.5,
        delay: 0.5,
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
      },
    });
  }
}

Contact.className = 'Contact';
export default Contact;
