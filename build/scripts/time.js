function updateTime() {
    var now = new Date();
    var edtTime = now.toLocaleString("pt-BR", {timeZone: "Brazil/East"});
    var time = edtTime.split(", ")[1];
    document.getElementById("time").textContent = time;
}

updateTime();
setInterval(updateTime, 1000);
