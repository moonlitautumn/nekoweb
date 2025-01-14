function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function send() {
    let txt=document.getElementById("send-msg-box");
    txt.value!=""&&(fetch("https://ntfy.plasmatrap.com/sillyivyluna",{method:"POST",body:txt.value}),txt.value="")
    let soundeffect = document.getElementById('ping');
    soundeffect.play();
    
    sleep(1000);
    alert("message sent!");
};