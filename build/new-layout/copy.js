function copytext() {
    const copyText = '<a href="https://sillyivy.nekoweb.org" target="_blank"><img src="https://sillyivy.nekoweb.org/button.gif"></a>';
    navigator.clipboard.writeText(copyText);
    let soundeffect = document.getElementById('ping');
    soundeffect.play();
    alert("done!")
} 