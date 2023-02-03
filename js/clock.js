const clock = document.getElementById('clock');

function nowTime(){
    const today = new Date();
    const hours =('0'+today.getHours()).slice(-2);
    const minutes =('0'+today.getMinutes()).slice(-2);
    const seconds =('0'+today.getSeconds()).slice(-2);
    const time = `${hours}:${minutes}:${seconds}`;
    clock.innerText = time;
}

nowTime();
setInterval(nowTime, 1000);