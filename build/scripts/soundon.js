
function unmuteambiance() {
    let audio = document.getElementById('rain'); 
    var hidee = document.getElementById('byebye'); 

	if (audio.muted) {
    	audio.muted = false;
        hidee.innerHTML = "unmuted ^^";
	} else {
        audio.muted = true;
        hidee.innerHTML = "muted...";
    }
}