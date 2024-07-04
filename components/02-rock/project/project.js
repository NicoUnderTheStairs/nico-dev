/* eslint-disable import/no-extraneous-dependencies */
// import { gsap } from 'gsap';
// import { gsap } from 'gsap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Base from '../../_config/base';

class Project extends Base {
  constructor(el) {
    super(el);
    const allLighthouseNumbers = [...el.querySelectorAll('.project__lighthouse__stat--title')];
    const shareButton = el.querySelector('.project__share');

    gsap.registerPlugin(ScrollTrigger);

    // if lighthouse numbers are in view, let numbers count up
    allLighthouseNumbers.forEach((number) => {
      ScrollTrigger.create({
        trigger: number,
        once: true,
        markers: false,
        start: 'top 100%',
        onEnter: () => {
          const numberValue = number.textContent;
          const numberValueInt = parseInt(numberValue, 10);
          const counter = { var: 10 };
          // random duration between 0.5 and 3 seconds
          const duration = Math.random() * 2.5 + 0.5;
          gsap.to(counter, {
            var: numberValueInt,
            duration,
            onUpdate: () => {
              number.textContent = Math.ceil(counter.var);
            },
          });
        },
      });
    });

    shareButton.addEventListener('click', () => {
      const shareUrl = window.location.href;
      const shareTitle = shareButton.getAttribute('data-shareTitle');
      const shareText = shareButton.getAttribute('data-shareText');
      if (navigator.share) {
        navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } else {
        shareButton.classList.add('project__share--desktop');
        setTimeout(() => {
          shareButton.classList.remove('project__share--desktop');
        }, 5000);
        navigator.clipboard.writeText(window.location.href);
      }
    });
  }
}

Project.className = 'Project';
export default Project;
