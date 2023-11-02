let audio = document.getElementById('audio');
let durationText = document.getElementById('duration');
let progressbar = document.getElementById('progressbar');
let totalDuration = document.getElementById('totalDuration');
let title = document.getElementById('title');
let author = document.getElementById('author');
const jsmediatags = window.jsmediatags;


jsmediatags.read(audio.src, {
    onSuccess: function (tag) {
        var tags = tag.tags;
        title.innerHTML = tags.title ?? "Unknown";
        author.innerHTML = tags.artist ?? "Unknown";

    },
    onError: function (error) {
        console.error("ERROR: " + error.type);
    }
});

play_toggle = () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

seekForward = () => {
    audio.currentTime += 10;
}

seekBackward = () => {
    audio.currentTime -= 10;
}

formatDuration = (currentTime) => {
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var currentTimeString = minutes + ":" + seconds;
    return currentTimeString;
}
play_toggle = () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

formatDuration = (currentTime) => {
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var currentTimeString = minutes + ":" + seconds;
    return currentTimeString;
}
audio.addEventListener("loadedmetadata", (event) => {
    totalDuration.innerHTML = formatDuration(audio.duration);
});
audio.addEventListener("timeupdate", (event) => {
    durationText.innerHTML = formatDuration(audio.currentTime);
    progressbar.value = audio.currentTime / audio.duration * 100;
});

progressbar.addEventListener("input", (event) => {
    audio.currentTime = progressbar.value / 100 * audio.duration;
});

