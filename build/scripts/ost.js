function osttoggle() {
    let ostaudio = document.getElementById('ost'); 
    var toggle = document.getElementById('toggle'); 
    var bye = document.getElementById('byee'); 
    
    if (ostaudio.paused) {
    	ostaudio.play().
        toggle.innerHTML = "playing!";
        bye.innerHTML = '';
	} else {
        ostaudio.pause();
        toggle.innerHTML = "paused :(";
        bye.innerHTML = '';
    }
}