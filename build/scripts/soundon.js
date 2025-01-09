
function unmuteambiance() {
    let audio = document.getElementById('rain'); 
    var hidee = document.getElementById('byebye2'); 

	if (audio.muted) {
    	audio.muted = false;
        hidee.innerHTML = "wind unmuted";
	} else {
        audio.muted = true;
        hidee.innerHTML = "wind muted";
    }
    
}