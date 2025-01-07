let details = navigator.userAgent; 
  
/* Creating a regular expression  
containing some mobile devices keywords  
to search it in details string*/
let regexp = /android|iphone/i; 
  
/* Using test() method to search regexp in details 
it returns boolean value*/
let isMobileDevice = regexp.test(details); 
const params1 = new URLSearchParams(window.location.search);
let reset1 = params1.has("reset-device");
  
if (isMobileDevice) { 
    console.log("Mobile Device"); 
    if (reset1) {
        localStorage.removeItem("notified");
        console.log("reset alert");
        let soundeffect = document.getElementById('ping');
        soundeffect.play();
        alert("reset device detector!!")
    } else {
        console.log(reset1);
        if (localStorage.getItem("notified") == "true") {
            console.log("already alerted");
        } else {
            let soundeffect = document.getElementById('ping');
            soundeffect.play();
            alert("this website was designed for pc's / wide displays, it will prob look bad on your device!!");
            localStorage.setItem("notified", "true");
        }
    }
} else { 
    console.log("Desktop"); 
}