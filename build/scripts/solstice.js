function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function message() {
    let soundeffect = document.getElementById('ping');
    sleep(2000).then(() => { 
        soundeffect.play();
        alert('sorryyyy')
        sleep(1000).then(() => { 
            soundeffect.play()
            alert('this place is still work in progress..')
            sleep(1000).then(() => { 
                soundeffect.play()
                alert('it will be done soon though so maybe check back later!')
                
            });
        
        });
    });

}
message()