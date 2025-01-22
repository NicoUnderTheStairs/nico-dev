import Scrollsmoother from './01-pebble/scrollsmoother/scrollsmoother';
import Hero from './02-rock/hero/hero';
import Easteregg from './02-rock/easteregg/easteregg';
import ProjectGrid from './02-rock/projectGrid/projectGrid';
import Notfound from './02-rock/notfound/notfound';
import Header from './03-boulder/header/header';
import Footer from './03-boulder/footer/footer';
import Project from './02-rock/project/project';
import Contact from './02-rock/contact/contact';
import Video from './02-rock/video/video';
import Animations from './03-boulder/animations/animations';
import Whyme from './03-boulder/whyme/whyme';

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
  Component.Contact = Contact.init();
  Component.Animations = Animations.init();
  Component.Footer = Footer.init();
  Component.ProjectGrid = ProjectGrid.init();
  Component.Project = Project.init();
  Component.Hero = Hero.init();
  Component.Notfound = Notfound.init();
  Component.Whyme = Whyme.init();
  Component.Video = Video.init();
});
