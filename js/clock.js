const clock = document.getElementById('clock');

function nowTime(){
    const today = new Date();
    let hours = today.getHours();
    const minutes =('0'+today.getMinutes()).slice(-2);
    let ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const time = `${ampm} ${hours}시 ${minutes}분`;
    clock.innerText = time;
}

nowTime();
setInterval(nowTime, 1000);