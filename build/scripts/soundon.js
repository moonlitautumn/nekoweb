var audio = document.getElementById('hmmmm'); 
var hidee = document.getElementById('byebye'); 

function unmuteambiance() {
	if (audio.muted) {
    	audio.muted = false;
        hidee.innerHTML = "unmuted ^^";
	} else {
        audio.muted = true;
        hidee.innerHTML = "muted...";
    }
}