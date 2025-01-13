function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function send() {
    let txt=document.getElementById("send-msg-box");
    txt.value!=""&&(fetch("https://ntfy.plasmatrap.com/sillyivyluna",{method:"POST",body:txt.value}),txt.value="")
    let soundeffect = document.getElementById('ping');
    sleep(150);
    soundeffect.play();
    alert("message sent!");
};