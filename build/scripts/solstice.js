function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function message() {

    sleep(2000).then(() => { 
        alert('sorryyyy')
        sleep(2000).then(() => { 
            alert('this place is still work in progress..')
            sleep(2000).then(() => { 
                alert('it will be done soon though so maybe check back later!')
                
            });
        
        });
    });

}
message()