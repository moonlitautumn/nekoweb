var audioElm = document.getElementById('ambiance'); 
var hide = document.getElementById('byebye'); 

function unmuteambiance() {
	if (audioElm.muted) {
    	audioElm.muted = false;
        hide.innerText = "unmuted ^^";
	} else {
        audioElm.muted = true;
        hide.innerText = "muted...";
    }
}