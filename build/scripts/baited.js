function test() {
    const isperv = localStorage.getItem("baited");
    if (isperv == "true") {
        document.getElementById("test").innerText = "baited = TRUE!!"
    } 
}
test()