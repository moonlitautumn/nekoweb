
function unmuteambiance() {
    let audio = document.getElementById('rain'); 
    var hidee = document.getElementById('byebye'); 

	if (audio.muted) {
    	audio.muted = false;
        hidee.innerHTML = "unmuted ^^";
        localStorage.setItem("muted", 'false');
    } else {
        audio.muted = true;
        hidee.innerHTML = "muted...";
        localStorage.setItem("muted", 'true');
    }
}
function retrievedata() {
    if (localStorage.getItem("muted") = 'true') {
        audio.muted = true;
        hidee.innerHTML = "muted...";
    } else {
        audio.muted = false;
        hidee.innerHTML = "unmuted ^^";
    }
}
retrievedata()