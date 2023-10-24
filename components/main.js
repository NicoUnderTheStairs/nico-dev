import Header from './03-boulder/header/header';

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
  const Component = window.Streusel || {};

  html.classList.remove('no-js');

  Component.Header = Header.init();
});
