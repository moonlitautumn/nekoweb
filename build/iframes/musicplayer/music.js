const nodes = {
    playButton: document.getElementById("music-toggle"),
    previousButton: document.getElementById("music-prev"),
    nextButton: document.getElementById("music-next"),
    logoImg: document.getElementById("music-logo"),
    titleText: document.getElementById("song-name"),
    authorText: document.getElementById("song-uploader"),
    playbackBar: document.getElementById("playback-bar"),
    playbackFill: document.getElementById("playback-fill"),
    volumeArea: document.getElementById("volume-area"),
    volumeIcon: document.getElementById("volume-icon"),
    volumeBar: document.getElementById("volume-bar"),
    volumeFill: document.getElementById("volume-fill"),
    timeText: document.getElementById("playtime")
};

const params = new URLSearchParams(window.location.search);
const list = params.get("list");

const updateVisibility = () => {
    nodes.volumeArea.style.display = "flex";
    nodes.timeText.style.display = "initial";

    const documentWidth = document.body.getBoundingClientRect().width;
    if(documentWidth < 360) {
        nodes.volumeArea.style.display = "none";
    }

    if(documentWidth < 300) {
        nodes.timeText.style.display = "none";
    }
};

window.addEventListener("load", (event) => {
    updateVisibility();
});
window.addEventListener("resize", (event) => {
    updateVisibility();
});

const imgUrlPlay = {
    play: "pngs/music_play.png",
    pause: "pngs/music_pause.png",
    loading: "pngs/music_load.gif"
};

const imgUrlVolume = {
    normal: "pngs/music_volume_100.png",
    low: "pngs/music_volume_50.png",
    lowest: "pngs/music_volume_20.png",
    mute: "pngs/music_volume_mute.png"
};

function formatTime(seconds) {
    if(seconds >= 60*60)
        return new Date(seconds * 1000).toISOString().slice(11, 19);
    else
        return new Date(seconds * 1000).toISOString().slice(14, 19);
}

let cachedIcon = imgUrlVolume.normal;
nodes.volumeIcon.addEventListener("click", (e) => {
    if(player) {
        if(player.isMuted()) {
            //nodes.volumeIcon.src = imgUrlVolume.mute;
            nodes.volumeIcon.src = cachedIcon;
            player.unMute();
        } else {
            cachedIcon = nodes.volumeIcon.src;
            nodes.volumeIcon.src = imgUrlVolume.mute;
            player.mute();
        }
    }
});

let seeking = false;
nodes.playbackBar.addEventListener("mousedown", (e) => {
    setPlaybackFromMouse(nodes.playbackBar, nodes.playbackFill, e.clientX, false);
    seeking = true;
    clearInterval(videoAutoUpdater);

    const move = (e) => {
        setPlaybackFromMouse(nodes.playbackBar, nodes.playbackFill, e.clientX, false);
    };
    const endMove = (e) => {
        document.documentElement.removeEventListener('mousemove', move, false);
        document.documentElement.removeEventListener('mouseup', endMove, false);
        seeking = false;
        setPlaybackFromMouse(nodes.playbackBar, nodes.playbackFill, e.clientX, true);
    };

    document.documentElement.addEventListener('mousemove', move, false);
    document.documentElement.addEventListener('mouseup', endMove, false);
});

function setPlaybackFromMouse(bar, fill, pointerX, allowSeekAhead) {
    if(!player)
        return;

    var rect = bar.getBoundingClientRect();
    let ratio = (pointerX - rect.left) / rect.width;
    ratio = Math.min(Math.max(ratio, 0), 1);
    let newTime = ratio * player.getDuration();
  
    fill.style.width = (ratio * 100) + "%";
    player.seekTo(newTime, allowSeekAhead);
    nodes.timeText.innerText = formatTime(Math.floor(newTime)) + " / " + formatTime(Math.floor(player.getDuration()));
}

nodes.volumeBar.addEventListener("mousedown", (e) => {
    setVolumeFromMouse(nodes.volumeBar, nodes.volumeFill, e.clientX);

    const move = (e) => {
        setVolumeFromMouse(nodes.volumeBar, nodes.volumeFill, e.clientX);
    };
    const endMove = (e) => {
        document.documentElement.removeEventListener('mousemove', move, false);
        document.documentElement.removeEventListener('mouseup', endMove, false);
    };

    document.documentElement.addEventListener('mousemove', move, false);
    document.documentElement.addEventListener('mouseup', endMove, false);
});

function setVolumeFromMouse(bar, fill, pointerX) {
    var rect = bar.getBoundingClientRect();
    let newVolume = (pointerX - rect.left) / rect.width * 100;
    newVolume = Math.min(Math.max(newVolume, 0), 100);

    fill.style.width = newVolume + "%";

    if(player) {
        player.unMute();
        player.setVolume(newVolume);
    }

    if(newVolume >= 50) {
        nodes.volumeIcon.src = imgUrlVolume.normal;
    } else if(newVolume < 50 && newVolume >= 20) {
        nodes.volumeIcon.src = imgUrlVolume.low;
    } else if(newVolume < 20 && newVolume > 0) {
        nodes.volumeIcon.src = imgUrlVolume.lowest;
    } else {
        nodes.volumeIcon.src = imgUrlVolume.mute;
    }
    //volumeIcon
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '200',
        width: '200',
        playerVars: {
            'playsinline': 1,
            'disablekb': 1,
            'controls': 0,
            'list': list,
            'index': params.has("index") ? params.get("index") : 0,
            'autoplay': params.has("autoplay") ? params.get("autoplay") : 0,
            'loop': 1

        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

let shufflePlayPrevent = false;

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.setVolume(50);
    event.target.setLoop(true);

    nodes.volumeFill.style.width = "50%";
    nodes.volumeIcon.src = imgUrlVolume.low;
  
    //if(params.has("shuffle") ? params.get("shuffle") : 0) {
    //    player.setShuffle(true);
    //    player.playVideoAt(numPl);
    //    if((params.has("autoplay") ? params.get("autoplay") : 0) == 0) {
    //        shufflePlayPrevent = true;
    //        player.pauseVideo();
    //        setTimeout(() => player.pauseVideo(), 1);
    //    }
    //} else {
    //    updateVideoInfo(event.target.getVideoData());
    //}

    /*if(params.has("index"))*/
  
    //titleText.innerHTML = player.getVideoData().title;
    /*updateVideoInfo(event.target.getVideoData());*/
  
    /*event.target.setShuffle({'shufflePlaylist' : 1});
    event.target.nextVideo();
    titleText.innerHTML = player.getVideoData().title;
    event.target.setShuffle({'shufflePlaylist' : 0});
    event.target.stopVideo();
    playRandomTrack();
    */
    nodes.playButton.addEventListener('click', function(){
        togglePlay();
    });
    nodes.previousButton.addEventListener('click', function(){
        player.previousVideo();
    });
    nodes.nextButton.addEventListener('click', function(){
        player.nextVideo();
    });

    //window.top.postMessage({type:'musicStarted'}, location.origin);
}

let videoAutoUpdater = () => {
    updateTime();
};
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
    /*if (event.data == YT.PlayerState.PLAYING) {
        setTimeout(stopVideo, 6000);
        done = true;
    }*/
   
    const playerasdf = event.target;

    if(params.has("shuffle") ? params.get("shuffle") = 'true' : false) {
        playerasdf.setShuffle(true);
    }
    
    updateGraphics(event.data);
    if(event.data == YT.PlayerState.PLAYING) {
        setInterval(videoAutoUpdater, 500);
    } else {
        clearInterval(videoAutoUpdater);
    }
  
    if(shufflePlayPrevent && event.data == YT.PlayerState.PLAYING) {
        shufflePlayPrevent = false;
        player.pauseVideo();
    }
}

/*
    YT.PlayerState.ENDED or 0
    YT.PlayerState.PLAYING or 1
    YT.PlayerState.PAUSED or 2
    YT.PlayerState.BUFFERING or 3
    YT.PlayerState.CUED or 5
*/

function togglePlay() {
    /*console.log(JSON.stringify(player));*/
    if (player.getPlayerState() == YT.PlayerState.PAUSED || player.getPlayerState() == YT.PlayerState.BUFFERING || player.getPlayerState() == YT.PlayerState.CUED) {
        player.playVideo();
    } else if (player.getPlayerState() == YT.PlayerState.PLAYING || player.getPlayerState() == YT.PlayerState.ENDED || player.getPlayerState() == YT.PlayerState.BUFFERING) {
        player.pauseVideo();
    }
};

function updateGraphics(state) {
    var newSrc;
    if(player.getVideoData().title != undefined)
        updateVideoInfo(player.getVideoData());
    updateTime();
    /*if(state == YT.PlayerState.PLAYING) newSrc = "index/music_pause.png";
    if(state == YT.PlayerState.PAUSED) newSrc = "index/music_play.png";*/
    if(state == YT.PlayerState.PLAYING) newSrc = imgUrlPlay.pause;
    if(state == YT.PlayerState.PAUSED) newSrc = imgUrlPlay.play;
    if(state == YT.PlayerState.BUFFERING || state == YT.PlayerState.CUED) newSrc = imgUrlPlay.loading;
    if(newSrc && newSrc !== nodes.playButton.src)
        nodes.playButton.src = newSrc;
}

function updateTime() {
    if(player && !seeking) {
        nodes.playbackFill.style.width = (player.getCurrentTime() / player.getDuration() * 100) + "%";
        nodes.timeText.innerText = formatTime(Math.floor(player.getCurrentTime())) + " / " + formatTime(Math.floor(player.getDuration()));
    }
}

function updateVideoInfo(info) {
    nodes.titleText.innerText = info.title;
    nodes.authorText.innerText = "Uploaded by " + info.author;
    nodes.logoImg.src = "http://img.youtube.com/vi/" + info.video_id + "/mqdefault.jpg";
    nodes.logoImg.parentNode.href = player.getVideoUrl();
    //"https://www.youtube.com/watch?v=QoGM9hCxr4k&list=PLVszhPDEAN1oPkYIJMstNyEKrjFrRyEDZ
    /*linkButton.href = "https://youtu.be/" + player.getVideoData().video_id;*/
}

const nodeInput = document.getElementById("custom-input");
function createPlaylist() {
    let url = nodeInput.value;
    let urlPart = url.split("?");
    if(urlPart.length != 2)
        return;
  
    let trueUrl = "?" + urlPart[1];
  
    const params = new URLSearchParams(trueUrl);

    if(params.has("list")) {
        // Old method, rest in peace
        /*window.top.postMessage({
            type: "openApp",
            app: "music",
            options: {list:params.get('list'),index:params.has('index') ? params.get('index') : 0}
            }, location.origin);
            document.getElementById('custom-playlist').style.display = 'none';*/
    
        // New method that let's this be used outside of the shrine
        let newURL = new URL(document.location);
        newURL.searchParams.set('list', params.get('list'));
        newURL.searchParams.set('index', params.has('index') ? params.get('index') : 0);
        console.log(newURL.href);
        window.location.href = newURL.href;
    }
}

window.addEventListener("message", (e) => {
    /*var css = e.data,
    head = document.head,
    style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }*/
    switch (e.data.type) {
        case "style":
        var css = e.data.css,
        head = document.head,
        style = document.createElement('style');
    
        head.appendChild(style);
    
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        break;
    }
});

/*window.addEventLister("load", (e) => {
  document.body.style.display = "flex";
});*/
/*window.addEventListener('load', function () {
  document.body.style.display = "flex";
})*/