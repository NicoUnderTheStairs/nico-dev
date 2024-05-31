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
  }
}

Project.className = 'Project';
export default Project;
