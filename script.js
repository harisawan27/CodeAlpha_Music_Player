const title = document.querySelector(".title");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");
const audio = document.querySelector("audio");

// First, we will create a song list
const songList = [
  {
    songName: "Generic",
    link: "Generic 1.mp3",
  },
  {
    songName: "Ertugrul Son's Osman",
    link: "Ertugrul Son's Osman.mp3",
  },
];

let songPlaying = false;

// Play song
function playSong() {
  songPlaying = true;
  audio.play();
  playPause.classList.add("active");
  // Change icon
  playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

// Pause song
function pauseSong() {
  songPlaying = false;
  audio.pause();
  playPause.classList.remove("active");
  // Change icon
  playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

// Play or pause song on click
playPause.addEventListener("click", () =>
  songPlaying ? pauseSong() : playSong()
);

// Load song
function loadSong(song) {
  title.textContent = song.songName;
  audio.src = song.link;
}

// Current song
let i = 0;

// On load - select the first song from the song list
loadSong(songList[i]);

// Previous song
function prevSong() {
  i--;
  if (i < 0) {
    i = songList.length - 1;
  }
  loadSong(songList[i]);
  playSong();
}

prev.addEventListener("click", prevSong);

// Next song
function nextSong() {
  i++;
  if (i > songList.length - 1) {
    i = 0;
  }
  loadSong(songList[i]);
  playSong();
}

next.addEventListener("click", nextSong);
