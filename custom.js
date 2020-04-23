// document.getElementById('audio').setAttribute("controls", true);

document.addEventListener('DOMContentLoaded', function (e) {
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");


  const audio = new Audio('./mpthreetest.mp3');

  function playAndPauseHandler(e) {
    /**
    if (this.id === 'play-icon') {
      console.log('play-icon clicked');
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';

      audio.play();
    }

    if (this.id === 'pause-icon') {
      console.log('pause-icon clicked');
      pauseIcon.style.display = 'none';
      playIcon.style.display = 'block';

      audio.pause();
    }
     */

    if (audio.paused) {
      console.log('play-icon clicked');
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';

      audio.play();
    } else {
      console.log('pause-icon clicked');
      pauseIcon.style.display = 'none';
      playIcon.style.display = 'block';

      audio.pause();
    }
  }

  playIcon.addEventListener('click', playAndPauseHandler);
  pauseIcon.addEventListener('click', playAndPauseHandler);
});
