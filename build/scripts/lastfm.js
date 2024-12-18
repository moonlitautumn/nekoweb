//modified version of the code by https://blackspace.nekoweb.org!!
//sorry for copying your code, lmk if you want me to take it down! <3

function fetchNowPlaying() {
    const username = 'sillygirlivy';
    const apiKey = '61e9b0e983c12e0e518210e01396a894';
    const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`;
  
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const recentTracks = data.recenttracks.track;

        if (recentTracks.length > 0) {
            const nowPlaying = recentTracks[0];
            
            const songName = nowPlaying.name + ' - ' + nowPlaying.artist['#text'];
            
            const songcover = nowPlaying.image['1']['#text'];
            const dynamlink = nowPlaying.url;

            const timeAgo = nowPlaying.date ? calculateTimeAgo(nowPlaying.date.uts) : '(now playing!)'; // Check if date exists
            
            //document.getElementById('songName').textContent = songName;
            document.getElementById('timeago').textContent = timeAgo;
            
            document.getElementById('dynamlink').href = dynamlink;
            document.getElementById('songcover').src = songcover;

            document.querySelector('#song').innerHTML = songName;
        }
    })
    .catch(error => {
        console.error('Error fetching now playing:', error);
    });
}
  
  
function calculateTimeAgo(uts) {
    const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
    const timeElapsed = currentTime - parseInt(uts, 10);
  
    if (timeElapsed < 60) {
        return '(1 minute ago)';
    } else if (timeElapsed < 3600) {
        const minutesAgo = Math.floor(timeElapsed / 60);
        return `(played ${minutesAgo} minutes ago)`;
    } else if (timeElapsed < 86400) {
        const hoursAgo = Math.floor(timeElapsed / 3600);
        return `(played ${hoursAgo} hours ago)`;
    } else if (timeElapsed < 604800) {
        const daysAgo = Math.floor(timeElapsed / 86400);
        return `(played ${daysAgo} days ago)`;
    } else {
        const weeksAgo = Math.floor(timeElapsed / 604800);
        return `(played ${weeksAgo} weeks ago)`;
    }
}
  
  // Fetch now playing on page load
fetchNowPlaying();
  
  // Fetch now playing every 15 seconds
setInterval(fetchNowPlaying, 15000);
  