const dayE = document.getElementById("dy") 

const hourE = document.getElementById("hr")

const minuteE = document.getElementById("min")

const secondE = document.getElementById("sec")

const diwaliEve = "12 nov 2023";

function countdown(){
    const diwaliDate = new Date(diwaliEve);
    const currentDate = new Date();

    const totalSeconds = (diwaliDate-currentDate)/1000;

    const days = Math.floor( totalSeconds/3600/24);

    const hours = Math.floor(totalSeconds/3600) % 24;

    const minutes = Math.floor(totalSeconds/60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;



    dayE.innerHTML =  days;
    hourE.innerHTML = formatTime(hours);
    minuteE.innerHTML = formatTime(minutes);
    secondE.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);
