const start_btn = document.getElementById('start_btnid');
let start = true;
// let alarm = new Audio('');
let timerStartet = false;


function startTimer(){
    if (!timerStartet){
    let starttime = new Date().getTime();
    console.log(starttime);
    let fiveMinutes = 1000  *60 *50 ;
    let endTime = starttime + fiveMinutes;

    setInterval(function(){
        let timeLeft = endTime - new Date().getTime(); 

        if ( timeLeft > 0){
        let minutes = timeLeft / (1000*60);
        minutes = Math.floor(minutes);
        let seconds = (timeLeft / 1000) % 60;
        seconds = Math.round(seconds);
        seconds = ('0' + seconds).slice(-2);
        let text =  minutes + ':' + seconds;
        console.log(text);
        timerId.innerHTML = text;
        } else {
            // alarm.play();
            timerId.innerHTML = '00:00';
        }



    }, 1000); 
    timerStartet = true;

}}








// start_btn.onclick = function () {
    
//     console.log('klick')
 
 
//  };