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
  }
}

ProjectGrid.className = 'ProjectGrid';
export default ProjectGrid;
