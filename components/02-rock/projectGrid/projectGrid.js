/* eslint-disable import/no-extraneous-dependencies */
// import { gsap } from 'gsap';
// import { gsap } from 'gsap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Base from '../../_config/base';

class ProjectGrid extends Base {
  constructor(el) {
    super(el);
    const allProjects = [...el.querySelectorAll('.projectGrid__desktop__item')];
    const allProjectsImg = [...el.querySelectorAll('.projectGrid__desktop__img')];

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.refresh();
    gsap.from(el.querySelector('.projectGrid__desktop'), {
      scrollTrigger: {
        trigger: el.querySelector('.projectGrid__desktop__display'),
        pin: true, // pin the trigger element while active
        start: 'top 15%', // when the top of the trigger hits the top of the viewport
        end: 'bottom 75%', // end after scrolling 500px beyond the start
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
        delay: 100,
      },
    });

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < allProjects.length; i++) {
      const project = allProjects[i];
      // mouse over event
      project.addEventListener('mouseover', () => {
        // if mouse over, remove active class from all other projects
        allProjectsImg.forEach((item) => {
          item.classList.remove('projectGrid__desktop__img--active');
        });
        // add active class to the current project
        allProjectsImg[i].classList.add('projectGrid__desktop__img--active');
      });
    }

    let mouseMoveTimeout;

    window.onmousemove = (e) => {
      // Clear the previous timeout
      clearTimeout(mouseMoveTimeout);

      // based on mouseposition relative to the image, change perspective of img
      const x = e.clientX;
      const y = e.clientY;
      const w = window.innerWidth * 0.6;
      const h = window.innerHeight * 0.6;
      const offsetX = 0.5 - (x / w);
      const offsetY = 0.5 - (y / h);
      allProjectsImg.forEach((item) => {
        item.classList.remove('projectGridImgAnimation');
        item.style.transform = `perspective(1000px) rotateX(${offsetY * 25}deg) rotateY(${offsetX * 25}deg) translateZ(10px)`;
      });

      // Set a timeout to detect when the mouse stops moving
      mouseMoveTimeout = setTimeout(() => {
        allProjectsImg.forEach((item) => {
          item.classList.add('projectGridImgAnimation');
        });
      }, 200); // Adjust the timeout duration as needed
    };
  }
}

ProjectGrid.className = 'ProjectGrid';
export default ProjectGrid;
