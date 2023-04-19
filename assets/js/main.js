const start = document.querySelector(".start");
const rotate = document.querySelector(".rotate");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const play = document.querySelector(".play");
var timeEl = document.querySelector("#time");
var timer = null;
var [hours, minutes, seconds] = [0, 0, 0];

start.addEventListener("click", () => {
    statrTimer()
})


stop.addEventListener("click", () => {
    stopTimer()
})

reset.addEventListener("click", () => {
   resettimer()
})

const stopWatch = () => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? ("0" + hours) : hours;
    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ? ("0" + seconds) : seconds;
    timeEl.innerHTML = h + ":" + m + ":" + s;
}

const statrTimer = () => {
    if (timer != null) {
        clearInterval(timer);
        console.log("Set time");
    }
    timer = setInterval(stopWatch, 1000)
    console.log("Timer start");
}

const stopTimer = () => {
    clearInterval(timer);
    console.log("Timer stoped");
}


const resettimer = () => {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0]
    timeEl.innerHTML = "00:00:00"
    console.log("Timer reset");
}



