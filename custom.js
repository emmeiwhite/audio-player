// document.getElementById('audio').setAttribute("controls", true);

document.addEventListener('DOMContentLoaded', function (e) {
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");

  function playAndPauseHandler(e) {
    if (this.id === 'play-icon') {
      console.log('play-icon clicked');
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    }

    if (this.id === 'pause-icon') {
      console.log('pause-icon clicked');
      pauseIcon.style.display = 'none';
      playIcon.style.display = 'block';
    }
  }

  playIcon.addEventListener('click', playAndPauseHandler);
  pauseIcon.addEventListener('click', playAndPauseHandler);
});
