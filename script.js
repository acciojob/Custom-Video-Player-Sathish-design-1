/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// Play/Pause functionality
toggle.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚'; // Change to pause icon
    } else {
        video.pause();
        toggle.textContent = '►'; // Change to play icon
    }
});

// Update progress bar
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
});

// Seek functionality
progress.addEventListener('click', (e) => {
    const rect = progress.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / progress.offsetWidth;
    video.currentTime = percent * video.duration;
});

// Volume and playback rate controls
ranges.forEach(range => {
    range.addEventListener('input', (e) => {
        video[e.target.name] = e.target.value;
    });
});

// Skip buttons functionality
skipButtons.forEach(button => {
    button.addEventListener('click', () => {
        video.currentTime += parseFloat(button.dataset.skip);
    });
});