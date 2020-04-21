// document.getElementById('audio').setAttribute("controls", true);

document.addEventListener('DOMContentLoaded', function (e) {
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");

  playIcon.addEventListener('click', function (e) {
    this.style.display = "none";
    pauseIcon.style.display = "block";
  });


  pauseIcon.addEventListener('click', function (e) {
    this.style.display = "none";
    playIcon.style.display = "block";
  });
});
