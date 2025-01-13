const params1 = new URLSearchParams(window.location.search);
let reset1 = params1.has("reset-updatealert");
  

if (reset1) {
    localStorage.removeItem("updatealerted");
    console.log("reset");
    alert("reset!!")
} else {
    console.log(reset1);
    if (localStorage.getItem("updatealerted") == "true") {
        console.log("already alerted")
    } else {
        localStorage.setItem("updatealerted", "true");
        console.log("alerting!")
        alert("this websites layout was updated recently! if you have visited before i recommend you do CMD + SHIFT + R to do a full reload ^^ tyy!")
    }
}