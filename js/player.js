let video;
let durationControl;
let soundControl;
let intervalControl;

document.addEventListener("DOMContentLoaded", e => {
  video = document.getElementById("video");

  video.addEventListener("click", playStop);

  let playButtons = document.querySelectorAll(".play");
  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener("click", playStop);
  };

  let micControl = document.getElementById("mic-level");
  micControl.addEventListener("click", micVolume);

  durationControl = document.getElementById("duration-range");
  durationControl.addEventListener("mousedown", stopInterval);
  durationControl.addEventListener("click", setVideoDuration);

  durationControl.min = 0;
  durationControl.value = 0;

  soundControl = document.getElementById("sound-range");
  soundControl.addEventListener("mousedown", changeSoundVolume);
  soundControl.addEventListener("click", changeSoundVolume);

  soundControl.min = 0;
  soundControl.max = 10;
  soundControl.value = soundControl.max;
});

function playStop() {
  let playButton = document.querySelector(".player__button");
  playButton.classList.toggle("player__button--active");

  let stopButton = document.querySelector(".player__button-duration");
  stopButton.classList.toggle("player__button-duration--active");

  durationControl.max = video.duration;

  if (video.paused) {
    video.play();
    intervalControl = setInterval(updateDuration, 1000 / 66);
  } else {
    video.pause();
    clearInterval(intervalControl);
  }
};

function updateDuration() {
  durationControl.value = video.currentTime;
};

function stopInterval() {
  video.pause();
  clearInterval(intervalControl);
};

function setVideoDuration() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  video.currentTime = durationControl.value;
  intervalControl = setInterval(updateDuration, 1000 / 66);
};

function changeSoundVolume() {
  video.volume = soundControl.value / 10;
};

function micVolume() {
  if (video.volume == 0) {
    video.volume = soundLevel;
    soundControl.value = soundLevel * 10;
  } else {
    soundLevel = video.volume;
    video.volume = 0;
    soundControl.value = 0;
  }
};