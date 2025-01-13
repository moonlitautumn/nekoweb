document.getElementById("sendmsg").onclick=function(){
    let txt=document.getElementById("send-msg-box");
    txt.value!=""&&(fetch("https://ntfy.plasmatrap.com/benjae",{method:"POST",body:txt.value}),txt.value="sent!")};