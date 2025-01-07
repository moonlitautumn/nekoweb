let details = navigator.userAgent; 
  
/* Creating a regular expression  
containing some mobile devices keywords  
to search it in details string*/
let regexp = /android|iphone/i; 
  
/* Using test() method to search regexp in details 
it returns boolean value*/
let isMobileDevice = regexp.test(details); 
  
if (isMobileDevice) { 
    console.log("Mobile Device"); 

    if (localStorage.getItem("notified") != "true") {
        alert("this website was designed for pc's / wide displays, it will prob look bad on your device!!")
        localStorage.setItem("notified", "true")
    }
} else { 
    console.log("Desktop"); 
}