function test() {
    let isperv = localStorage.getItem("baited");
    if (isperv == "true") {
        document.getElementById("test").innerHTML = "baited = TRUE!!"
    } 
}
test()