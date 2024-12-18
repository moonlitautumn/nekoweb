var audio = document.getElementById('ambiance'); 
var hidee = document.getElementById('byebye'); 

function unmuteambiance() {
	if (audio.muted = true) {
    	audio.muted = false;
        hidee.innerHTML = "unmuted ^^";
	} else {
        audio.muted = true;
        hidee.innerHTML = "muted...";
    }
}