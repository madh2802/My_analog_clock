setInterval(() => {
    d = new Date();
    hours = d.getHours();
    mins = d.getMinutes();
    secs = d.getSeconds();
    hRotation = hours*30 + mins/2;
    mRotation = mins*6;
    sRotation = secs*6;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);