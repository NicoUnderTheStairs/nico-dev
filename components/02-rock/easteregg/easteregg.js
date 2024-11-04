import { playerScoreUpdate } from '../../_config/utils';
import Base from '../../_config/base';

class Easteregg extends Base {
  constructor(el) {
    super(el);
    // questState is a boolean that determines if the user has started or completed the quest
    const questState = localStorage.getItem('questState');
    const eastereggScoreboard = el;
    const quit = el.querySelector('.easteregg__quit');
    const playerInitials = el.querySelector('.easteregg__scoreboard--initials');
    const playerScoreText = document.querySelector('.easteregg__scoreboard--score');
    const easterEgg = document.querySelector('.laknsdow');

    // keyevent, check if user inputs konami code
    const konamiCode = '38384040373937396665';
    let input = '';
    window.addEventListener('keydown', (e) => {
      input += e.keyCode;
      if (input === konamiCode) {
        input = '';
        // eslint-disable-next-line no-alert
        alert('Congratulations! You deciphered my first hint and earned yourself the copper key! Ingraved in its shiny surface is the following inscription: "The first treasure is burried in the place where this creation was born. Look for anything odd, anything that doesn\'t belong."');
        localStorage.setItem('questState', 'true');
        localStorage.setItem('copperKey', 'true');
        eastereggScoreboard.classList.remove('d-none');
        // eslint-disable-next-line no-alert
        const initials = prompt('Please enter your Initials:', 'NDF');
        localStorage.setItem('initials', initials);
        playerInitials.textContent = initials;
        playerScoreUpdate(5000);
      }
    });

    if (questState === 'true') {
      eastereggScoreboard.classList.remove('d-none');
      playerInitials.textContent = localStorage.getItem('initials');
      const playerScore = localStorage.getItem('playerScore');
      parseInt(playerScore, 10);
      playerScoreText.textContent = playerScore;
    }

    if (easterEgg !== null) {
      easterEgg.onclick = () => {
        // eslint-disable-next-line no-alert
        alert('You find a shining white egg, laying there. After picking it up you find two small holes in the bottom. You try the two keys you have found and they fit! The Egg opens and you find a shinging golden egg! On there, in golden text is a small text: "So, you finally found my easteregg. I hope you enjoyed the journey and I hopefully also inspired you to also create and be creative in your own ways. I made myself a promise, that the first person to find my easteregg, will be rewarded with a special gift. Write me an email, try your luck and find out if you were the first person to have solved the mystery (nico+easteregg@fortino.ch). I will be waiting for your email."');
        playerScoreUpdate(1000000000);
      };
    }

    quit.onclick = () => {
      localStorage.clear();
      eastereggScoreboard.classList.add('d-none');
      window.location.reload();
    };
  }
}

Easteregg.className = 'Easteregg';
export default Easteregg;
