document.addEventListener('DOMContentLoaded', function (e) {
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");
  const volume = document.querySelector('.volume');
  const time = document.querySelector('.time-duration');
  const loop = document.querySelector('.loop');

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
  /** --- Volume --- */
  volume.addEventListener('change', volumeHandler);

  /** --- Till The End --- */
  audio.addEventListener('ended', function (e) {
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'block';
  });

  /** --- play and pause are two events that plays a key role --- */
  let timeInterval;
  audio.addEventListener('play', function (e) {
    timeInterval = setInterval(() => {
      time.textContent = `${audio.currentTime} / ${audio.duration}`;
      console.log("i am still being called");
    });
  });

  /** --- time duration that the audio has played so far --- */

  audio.addEventListener('pause', function (e) {
    // Pause the current time duration
    clearInterval(timeInterval);
  });


  /** --- loop button event handler --- */

  loop.addEventListener('click', function (e) {
    if (audio.loop) { // By default audio.loop=false
      audio.loop = false;
      loop.textContent = 'OFF';

    } else {
      // This block will be executed initially. Since this is the false block execution
      audio.loop = true;
      loop.textContent = 'ON';

    }
  });
});
