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
    } else {
        document.getElementById('music').muted = "true";
        localStorage.setItem("seen-diary", "true");
    }
}
