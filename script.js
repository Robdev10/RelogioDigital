const time = setInterval(() => {

    let datetoday = new Date();
    let hour = datetoday.getHours();
    let minutes = datetoday.getMinutes();
    let seconds = datetoday.getSeconds();

    if(hour < 10) hour = "0" + hour;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    document.getElementById("hour").innerHTML = hour
    document.getElementById("minute").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
})