// Create your global variables below:
var tracklist = ["Two&reg", "444+222", "Sauce It Up", "No Sleep Leak", "The Way Life Goes", "For Real", "Feelings Mutual", "Neon Guts", "Early 20 Rager", "Unfazed", "Pretty Mami", "How to Talk", "X", "Malfunction", "Dark Queen", "X0 Tour Llif3"];
var volLevels = ["vl0", "vl1", "vl2", "vl3", "vl4", "vl5"];
var vol = 2;
var song = 11;
var slider = document.getElementById("player-time");
var time = document.getElementById("time-elapsed");
time.innerHTML = secondsToMs(slider.value);
slider.oninput = function(){
  time.innerHTML = secondsToMs(this.value);
}

function init() {
  for(let i = 0; i < 3; i++){
    document.getElementById(volLevels[i]).style.backgroundColor = "#9f5cc4";
  }
}

function volUp() {
	if (document.getElementById("volup")){
    if (vol < 5){
      vol ++;
    }
    document.getElementById(volLevels[vol]).style.backgroundColor = "#9f5cc4";
  }
}

function volDown() {
  if (document.getElementById("voldown")){
    document.getElementById(volLevels[vol]).style.backgroundColor = "transparent";
    if (vol > -1){
      vol --;
    }
  }
}

function switchPlay() {
  let play = document.getElementById("play-button");
  let pause = document.getElementById("pause-button");
  if (play && pause){
    play.classList.toggle("hidden");
    pause.classList.toggle("hidden");
  }
  var interval = setInterval(increment, 1000);
  function increment(){
    if (slider.value == 180){
      nextSong();
    }
    if (window.getComputedStyle(play).display === "none"){
      slider.value++;
      time.innerHTML = secondsToMs(slider.value);
    }
    else{
      clearInterval(interval);
    }
  }
}

function nextSong() {
  if (document.getElementById("next-button")){
    if (song <= 15){
      song = song + 1;
    }
    if (song == 16){
      song = 0;
    }
    document.getElementById("player-song-name").innerHTML = tracklist[song];
    document.getElementById("time-elapsed").innerHTML = "0:00";
    slider.value = 0;
  }
}

function prevSong() {
  if (document.getElementById("prev-button")){
    if (song >= 0){
      song = song - 1;
    }
    if (song == -1){
      song = 15;
    }
    document.getElementById("player-song-name").innerHTML = tracklist[song];
    document.getElementById("time-elapsed").innerHTML = "0:00";
    slider.value = 0;
  }
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
