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
    const allProjectsMobile = [...el.querySelectorAll('.projectGrid__project')];
    const allProjectImg = [...el.querySelectorAll('.project__galery__item')];

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

    // if mouse is over the project, change the perspective of the image
    allProjectImg.forEach((item) => {
      item.onmousemove = (e) => {
        // based on mouseposition relative to the image, change perspective of img
        const x = e.clientX;
        const y = e.clientY;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const offsetX = 0.5 - (x / w);
        const offsetY = 0.5 - (y / h);
        item.style.transform = `perspective(1000px) rotateX(${offsetY * 15}deg) rotateY(${offsetX * 15}deg) translateZ(10px)`;
      };

      item.onmouseleave = () => {
        item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      };
    });

    allProjectsMobile.forEach((item) => {
      item.onmousemove = (e) => {
        // based on mouseposition relative to the image, change perspective of img
        const x = e.clientX;
        const y = e.clientY;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const offsetX = 0.5 - (x / w);
        const offsetY = 0.5 - (y / h);
        item.style.transform = `perspective(1000px) rotateX(${offsetY * 15}deg) rotateY(${offsetX * 15}deg) translateZ(10px)`;
      };

      item.onmouseleave = () => {
        item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      };
    });
  }
}

Project.className = 'Project';
export default Project;
