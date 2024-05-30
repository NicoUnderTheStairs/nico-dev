/* eslint-disable import/no-extraneous-dependencies */
import { gsap } from 'gsap';
import Base from '../../_config/base';

class Animations extends Base {
  constructor(el) {
    super(el);

    if (document.querySelector('.cursor-big') === null) return;
    // if mobile or tablet without window.innerwidth, return
    function isMobileOrTablet() {
      // Regular expression to match common mobile and tablet user agent patterns
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    }

    if (isMobileOrTablet()) {
      document.querySelector('.cursor-big').style.display = 'none';
      document.querySelector('.cursor-small').style.display = 'none';
      return;
    }

    const allLinksBigCursor = [...document.querySelectorAll('.linkBigCursor')];
    const allLinksSmallCursor = [...document.querySelectorAll('.linkSmallCursor')];

    gsap.set('.cursor-big', { xPercent: -50, yPercent: -50 });
    gsap.set('.cursor-small', { xPercent: -50, yPercent: -50 });

    const xToBig = gsap.quickTo('.cursor-big', 'x', { duration: 1, ease: 'power3' });
    const yToBig = gsap.quickTo('.cursor-big', 'y', { duration: 1, ease: 'power3' });

    const xToSmall = gsap.quickTo('.cursor-small', 'x', { duration: 0.6, ease: 'power3' });
    const yToSmall = gsap.quickTo('.cursor-small', 'y', { duration: 0.6, ease: 'power3' });

    window.addEventListener('mousemove', (e) => {
      xToBig(e.clientX);
      yToBig(e.clientY);
      xToSmall(e.clientX);
      yToSmall(e.clientY);
      gsap.to('.cursor-big', { opacity: 1 });
      gsap.to('.cursor-small', { opacity: 1 });
    });

    // if mouse leaves window, reduse opacity of cursor
    document.addEventListener('mouseleave', () => {
      gsap.to('.cursor-big', { opacity: 0 });
      gsap.to('.cursor-small', { opacity: 0 });
    });

    allLinksBigCursor.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to('.cursor-big', { scale: 3 });
        gsap.to('.cursor-small', { scale: 0 });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to('.cursor-big', { scale: 1 });
        gsap.to('.cursor-small', { scale: 1 });
      });
    });

    allLinksSmallCursor.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to('.cursor-big', { scale: 0 });
        gsap.to('.cursor-small', { scale: 0 });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to('.cursor-big', { scale: 1 });
        gsap.to('.cursor-small', { scale: 1 });
      });
    });
  }
}

Animations.className = 'Animations';
export default Animations;
