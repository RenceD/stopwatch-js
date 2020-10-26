var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var interval;

// this function will run when you click start 

function startTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9 ) {
        appendSeconds.innerHTML = seconds;
    }
}

buttonStart.onclick = function () {
    interval = setInterval(startTimer);
    console.log('clicked');
    buttonStart = document.getElementById('button-start').disabled= true;
}




// this function will run when you click stop
buttonStop.onclick = function() {
    clearInterval(interval); 
    buttonStart = document.getElementById('button-start').disabled= false;
}


// this function will run when you click reset
buttonReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    buttonStart = document.getElementById('button-start').disabled= false;
}