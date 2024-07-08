/* eslint-disable max-len */
// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap } from 'gsap';
import { playerScoreUpdate } from '../../_config/utils';
import Base from '../../_config/base';

class Notfound extends Base {
  constructor(el) {
    super(el);
    const allElements = [...document.querySelectorAll('.ufo__suckable')];
    const ufo = document.querySelector('.ufo');
    const cow = document.querySelector('.cow');

    gsap.set(cow, {
      x: '-170%', y: '90%',
    });

    gsap.set(ufo, {
      x: '-100%', y: '-100%', xPercent: -50, yPercent: -50,
    });

    // with gsap, make cow move up and down and walk from left to right through the screen
    const cowWalkAnim = gsap.to(cow, {
      x: window.innerWidth,
      y: '90%',
      ease: 'steps(40)',
      duration: 15,
      repeat: -1,
    });

    cowWalkAnim.play();

    const ufoHitsSuckable = (suckable) => {
      const a = suckable.getBoundingClientRect();
      const b = ufo.getBoundingClientRect();

      // check if the ufo collides with the element and return true if it does
      return !(
        a.right < b.left
        || a.left > b.right
        || a.bottom < b.top
        || a.top > b.bottom
      );

      // if (ufoX > a.left && ufoX < a.right && ufoY > a.top && ufoY < a.bottom) {
      //   return true;
      // }
    };

    const xToUfo = gsap.quickTo('.ufo', 'x', { duration: 5, ease: 'power3' });
    const yToUfo = gsap.quickTo('.ufo', 'y', { duration: 5, ease: 'power3' });

    window.addEventListener('mousemove', (e) => {
      xToUfo(e.clientX);
      yToUfo(e.clientY);
    });

    let eastereggtriggered = false;

    const triggerEasteregg = () => {
      eastereggtriggered = true;
      setTimeout(() => {
        if (localStorage.getItem('copperTreasure') === 'open' && localStorage.getItem('cowHint') !== 'true') {
          // eslint-disable-next-line no-alert
          alert('On your ship, the abducted cow gives you a piercing look. Then it holds out her hoots. You give it one of the two quarters, then it speaks load and clear: "Within the lines of code and light, A secret text hides, plain in sight. Near the phones, waiting there, on the first page, with curious care."  The cow then smiles, and with a wink, dissapears. Where the cow stood, a new key appears. You have found the jade key!');
          localStorage.setItem('cowHint', 'true');
          localStorage.setItem('jadeKey', 'true');
          playerScoreUpdate(5250);
          // reload page
          window.location.reload();
        } else if (localStorage.getItem('cowHint') === 'true') {
          // eslint-disable-next-line no-alert
          alert('The cow stares at you angrily. You have already been given the hint. Now let her go in peace.');
        }
      }, 3000);
    };

    // function that runs on every frame
    function frame() {
      const ufoX = gsap.getProperty('.ufo', 'x');
      const ufoY = gsap.getProperty('.ufo', 'y');

      // if distance is close enough, suck the element in
      allElements.forEach((suckable) => {
        if (ufoHitsSuckable(suckable)) {
          const testX = ufoX - suckable.getBoundingClientRect().left + 100;
          const testY = ufoY - suckable.getBoundingClientRect().top;

          if (suckable.classList.contains('cow')) {
            gsap.to(cow, {
              x: ufoX - 200,
              y: testY - 100,
              scale: 0,
              rotate: 90,
              opacity: 0,
              duration: 2,
            });

            if (eastereggtriggered === false) {
              triggerEasteregg();
            }
          }

          gsap.set(suckable, { xPercent: -50, yPercent: -50 });
          gsap.to(suckable, {
            x: testX,
            y: testY,
            scale: 0,
            rotate: 180,
            opacity: 0,
            duration: 2,
          });
        }
      });

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
}

Notfound.className = 'Notfound';
export default Notfound;
