import Scrollsmoother from './01-pebble/scrollsmoother/scrollsmoother';
import Hero from './02-rock/hero/hero';
import Easteregg from './02-rock/easteregg/easteregg';
import ProjectGrid from './02-rock/projectGrid/projectGrid';
import Notfound from './02-rock/notfound/notfound';
import Header from './03-boulder/header/header';
import Footer from './03-boulder/footer/footer';
import Project from './02-rock/project/project';
import Animations from './03-boulder/animations/animations';

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

  Component.Scrollsmoother = Scrollsmoother.init();
  Component.Easteregg = Easteregg.init();
  Component.Header = Header.init();
  Component.Animations = Animations.init();
  Component.Footer = Footer.init();
  Component.ProjectGrid = ProjectGrid.init();
  Component.Project = Project.init();
  Component.Hero = Hero.init();
  Component.Notfound = Notfound.init();
});
