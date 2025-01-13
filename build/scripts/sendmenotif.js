function send() {
    let txt=document.getElementById("send-msg-box");
    txt.value!=""&&(fetch("https://ntfy.plasmatrap.com/sillyivyluna",{method:"POST",body:txt.value}),txt.value="")
    let soundeffect = document.getElementById('ping');
    soundeffect.play();
    alert("message sent!");
};