function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function message() {

    var WinNetwork = new ActiveXObject("WScript.Network");
    var username=typeof WinNetwork.UserName != "undefined" ? WinNetwork.UserName : "";

    sleep(2000).then(() => { 
        alert('dont forget to come back ' + username)
    });
}
message()