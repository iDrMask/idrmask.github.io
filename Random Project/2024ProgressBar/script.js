const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

setInterval(updateTime,1);

function updateTime(){
    let d = new Date()
    let currentDate = (d.getTime() - (5 * 60 * 60 * 1000))/1000;

    let minuteTime = (((currentDate%minute))/minute)*100
    document.getElementById("MinutepercentageText").innerHTML= `You Are ${minuteTime.toFixed(3)}% To Finishing The Minute`;
    document.getElementById("minute").value= (currentDate%minute);

    let hourTime = (((currentDate%hour))/hour)*100
    document.getElementById("HourpercentageText").innerHTML= `${hourTime.toFixed(3)}% To The Next Hour`;
    document.getElementById("hour").value= ((currentDate%hour)/minute);

    let dayTime = (((currentDate%day))/day)*100
    document.getElementById("DaypercentageText").innerHTML= `${dayTime.toFixed(3)}% To Completing The Day`;
    document.getElementById("day").value= ((currentDate%day)/hour);

    let yearTime = (((currentDate%year))/year)*100
    document.getElementById("YearpercentageText").innerHTML= `${yearTime.toFixed(3)}% To Finish The Year`;
    document.getElementById("year").value= ((currentDate%year)/day);
    console.log((currentDate%year)/day)
}

