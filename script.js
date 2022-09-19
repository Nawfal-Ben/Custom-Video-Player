const video = document.getElementById("video");
const playImg = document.getElementById("play-img");
const playPauseBtn = document.querySelector("#play-pause i");
const stop = document.getElementById("stop");
const progressBar = document.getElementById("progress-bar");
const timeElapsed = document.getElementById("time-elapsed");

// Hide default controls
video.removeAttribute("controls")

// Event Listeners
playPauseBtn.addEventListener("click", playPauseVideo)

playImg.addEventListener("click", playPauseVideo)

video.addEventListener("click", playPauseVideo)

video.addEventListener("timeupdate", timeElapsedVideo)

stop.addEventListener("click", stopVideo)

progressBar.addEventListener("change", setProgress)

// Play-Pause video
function playPauseVideo() {
    video.paused ? video.play() : video.pause();
    playPauseBtn.classList.toggle("fa-pause");
    playPauseBtn.classList.toggle("fa-play");
    playImg.style.display = "none"
    video.style.display = "block"
}

// Video Progress
function timeElapsedVideo() {
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime - minutes * 60);

    timeElapsed.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    const width = (video.currentTime / video.duration) * 100
    progressBar.value = width;
    
    if (video.currentTime === video.duration) stopVideo()

}

// Stop Video
function stopVideo() {

    playPauseBtn.classList.remove("fa-pause")
    playPauseBtn.classList.add("fa-play")
    video.pause()
    video.currentTime = 0
    timeElapsedVideo()
    playImg.style.display = "block"
    video.style.display = "none"

}

// Set progress
function setProgress() {

    video.currentTime = (progressBar.value / 100) * video.duration

}