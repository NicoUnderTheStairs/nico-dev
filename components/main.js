import Hero from './02-rock/hero/hero';
import ProjectGrid from './02-rock/projectGrid/projectGrid';
import Header from './03-boulder/header/header';
import Footer from './03-boulder/footer/footer';

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
  Component.Footer = Footer.init();
  Component.ProjectGrid = ProjectGrid.init();
  Component.Hero = Hero.init();
});
