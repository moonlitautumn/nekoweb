let details = navigator.userAgent; 
  
/* Creating a regular expression  
containing some mobile devices keywords  
to search it in details string*/
let regexp = /android|iphone/i; 
  
/* Using test() method to search regexp in details 
it returns boolean value*/
let isMobileDevice = regexp.test(details); 
const params = new URLSearchParams(window.location.search);
let reset = params.has("reset-device");
  
if (isMobileDevice) { 
    console.log("Mobile Device"); 
    if (reset == true) {
        localStorage.removeItem("notified");
        console.log("reset alert");
        alert("reset device detector!!")
    } else {
        if (localStorage.getItem("notified") == "true") {
            console.log("already alerted");
        } else {
            alert("this website was designed for pc's / wide displays, it will prob look bad on your device!!");
            localStorage.setItem("notified", "true");
        }
    }
} else { 
    console.log("Desktop"); 
}