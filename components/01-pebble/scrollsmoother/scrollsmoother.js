import { gsap } from 'gsap';
/* The following plugin is a Club GSAP perk */
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Base from '../../_config/base';

class Scrollsmoother extends Base {
  constructor(el) {
    super(el);
    gsap.registerPlugin(ScrollSmoother);

    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  }
}

Scrollsmoother.className = 'Scrollsmoother';
export default Scrollsmoother;