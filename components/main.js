// import Button from './01-atoms/button/button';

require('./main.scss');

function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  const html = document.querySelector('html');
  // const Component = window.Streusel || {};

  html.classList.remove('no-js');

  // Component.Button = Button.init();
});
