const params1 = new URLSearchParams(window.location.search);
let reset1 = params1.has("reset-diary");
  

 if (reset1) {
    localStorage.removeItem("seen-diary");
    console.log("reset diary");
    alert("diary reset!!")
} else {
    console.log(reset1);
    if (localStorage.getItem("seen-diary") == "true") {
        console.log("silence");
        document.getElementById('music').muted = "true";
        document.getElementById('change').innerHTML = "visiting again? ^^ (tyyy!)";
        document.getElementById('change').style.color = "#FF4B47";
    } else {
        localStorage.setItem("seen-diary", "true");
    }
}
