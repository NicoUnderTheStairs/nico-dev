import Base from '../../_config/base';

class Footer extends Base {
  constructor(el) {
    super(el);
    const timeElement = el.querySelector('.clock');

    function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Format the string with leading zeroes
      const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      timeElement.innerText = clockStr;

      // Set a timeout for one minute
      setTimeout(updateTime, 1000);
    }

    updateTime();
  }
}

Footer.className = 'Footer';
export default Footer;
