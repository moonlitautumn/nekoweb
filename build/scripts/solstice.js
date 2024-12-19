function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function message() {
    var wshshell=new ActiveXObject("wscript.shell");
    var username=wshshell.ExpandEnvironmentStrings("%username%") != null ? wshshell.ExpandEnvironmentStrings("%username%") : "";

    sleep(2000).then(() => { 
        alert('dont forget to come back ' + username)
    });
}
message()