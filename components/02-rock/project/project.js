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

    // If lighthouse numbers are in view, let numbers count up with color transition
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

          // Random duration between 0.5 and 3 seconds
          const duration = Math.random() * 2.5 + 0.5;

          gsap.to(counter, {
            var: numberValueInt,
            duration,
            onUpdate: () => {
              const currentValue = Math.ceil(counter.var);
              number.textContent = currentValue;

              // Adjust color dynamically as it counts up
              if (currentValue < 50) {
                const redShade = Math.min(255, currentValue * 5);
                number.style.color = `rgb(${redShade}, 0, 0)`; // Shading up to red
              } else if (currentValue < 75) {
                const greenShade = Math.min(165, (currentValue - 50) * 6.6);
                number.style.color = `rgb(255, ${greenShade}, 0)`; // Shading red to orange
              } else {
                const redShade = 255 - ((currentValue - 75) * 10);
                // transition to #008000
                const greenShade = Math.min(128, (currentValue - 50) * 2.56);
                number.style.color = `rgb(${Math.max(0, redShade)}, ${greenShade}, 0)`; // Orange to target green
              }
            },
            onComplete: () => {
              // Set final color based on the ending value
              if (numberValueInt < 50) {
                number.style.color = 'rgb(255, 0, 0)'; // Red
              } else if (numberValueInt < 75) {
                number.style.color = 'rgb(255, 165, 0)'; // Orange
              } else {
                number.style.color = '#008000'; // Final green color
              }
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
