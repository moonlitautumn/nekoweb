const params1 = new URLSearchParams(window.location.search);
let reset1 = params1.has("reset-diary");
  

 if (reset1) {
    localStorage.removeItem("seen-diary");
    localStorage.removeItem("seen-diary-buffer");
    console.log("reset diary");
    alert("diary reset!!")
} else {
    console.log(reset1);
    if (localStorage.getItem("seen-diary") == "true") {
        if (localStorage.getItem("seen-diary-buffer") == "true") {
            console.log("silence");
            document.getElementById('music').muted = "true";
            document.getElementById('change').innerHTML = "welcome back to whitespace";
            document.getElementById('change').style.color = "#FF4B47";
        } else {
            localStorage.setItem("seen-diary-buffer", "true")
        }
    } else {
        localStorage.setItem("seen-diary", "true");
    }
}
