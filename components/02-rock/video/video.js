import Base from '../../_config/base';

class Video extends Base {
  constructor(el) {
    super(el);
    const video = el.querySelector('.video__video');
    const playBtn = el.querySelector('.video__play');

    video.addEventListener('click', () => {
      video.play();
      setTimeout(() => {
        video.setAttribute('controls', 'controls');
      }, 10);
    });

    // Show the play button when the video is paused
    video.addEventListener('pause', () => {
      playBtn.classList.remove('d-none');
      setTimeout(() => {
        video.removeAttribute('controls');
      }, 10);
    });

    // Show the play button when the video is paused
    video.addEventListener('play', () => {
      playBtn.classList.add('d-none');
      setTimeout(() => {
        video.setAttribute('controls', 'controls');
      }, 10);
    });
  }
}

Video.className = 'Video';
export default Video;
