document.addEventListener('DOMContentLoaded', function (e) {
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");
  const volume = document.querySelector('.volume');

  const audio = new Audio('./mpthreetest.mp3');


  /** --- play pause Handler --- */
  function playAndPauseHandler(e) {
    if (audio.paused) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';

      audio.play();
    } else {
      pauseIcon.style.display = 'none';
      playIcon.style.display = 'block';

      audio.pause();
    }
  }


  /** --- volume handler --- */
  function volumeHandler(e) {
    console.log(e.target.value);
    audio.volume = e.target.value;
  }


  playIcon.addEventListener('click', playAndPauseHandler);
  pauseIcon.addEventListener('click', playAndPauseHandler);
  volume.addEventListener('change', volumeHandler);

});
