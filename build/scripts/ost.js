function osttoggle() {
    let ostaudio = document.getElementById('ost'); 
    var toggle = document.getElementById('toggle'); 
    var bye = document.getElementById('byee'); 
    
    if (ostaudio.muted) {
    	ostaudio.muted = false;
        toggle.innerHTML = "playing!";
        bye.innerHTML = '';
	} else {
        ostaudio.muted = true;
        toggle.innerHTML = "muted :(";
        bye.innerHTML = '';
    }
}