
function unmuteambiance() {
    let audio = document.getElementById('plspls'); 
    var hidee = document.getElementById('byebye'); 

	if (audio.muted) {
    	audio.muted = false;
        hidee.innerHTML = "unmuted ^^";
	} else {
        audio.muted = true;
        hidee.innerHTML = "muted...";
    }
}