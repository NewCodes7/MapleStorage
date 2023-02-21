const timerNpc = document.getElementById('timerNpc');
const timer = document.getElementById('TIMER');
const timerHidden = document.getElementById('timer-hidden');
const progressBar = document.getElementById('progressBar');
const progressBar2 = document.getElementById('progressBar2');
const progressArea = document.getElementById('progress-area');
const remainingTime = document.getElementById('remainingTime');
const remainingTime2 = document.getElementById('remainingTime2');
const timerOption = document.getElementById('timer-option');
const timerCancelBtn = document.getElementById('timerCancelBtn');
const timerStartBtn = document.getElementById('timerStartBtn');
const totalTime = document.getElementById('totalTime');
const tictacArea = document.getElementById('tictac-area');
const resultArea = document.getElementById('result-area');
let ticTac;
let ticTac2;
let reset;
let reset2;


function timerStart() {
    const timerNodeList = document.getElementsByName('timer');
    timerNodeList.forEach((node) => {
      if(node.checked)  {
        const timerSet = Number(node.value);
        let count = -1;
        let totalCount = -1;
        counting(); // start 눌렀을 때 바로 타이머 보이도록
        progressBar.classList.add(`on${timerSet}s`);
        const soundEffect = new Audio(`soundEffect/sound${timerSet}.mp3`);
        ticTac = setInterval(counting, 1000);
        reset = setInterval(() => {count=-1; soundEffect.play(); }, timerSet*999); //왜 화살표 함수로?, 1000으로 했을 때 첫 주기에서 1초 더 홀딩함(4초 기다리고 바뀜)
        setTimeout(clear, 2 * 60 * 60 * 1000); 
        function counting(){
            let remainingTotalSeconds = timerSet - (++count);
            totalCount += 1;
            let remainingMinutes = ('0' + Math.floor(remainingTotalSeconds/60)).slice(-2);
            let remainingSeconds = ('0' + Math.floor(remainingTotalSeconds%60)).slice(-2);
            let countUpMinutes = ('0' + Math.floor(totalCount/60)).slice(-2);
            let countUpSeconds = ('0' + Math.floor(totalCount%60)).slice(-2);
            remainingTime.innerText = `경쿠 남은시간: ${remainingMinutes}:${remainingSeconds}`;
            totalTime.innerText = `총 사냥시간: ${countUpMinutes}:${countUpSeconds}`
        }
        timerOption.style.display = 'none';
        tictacArea.style.display = 'block';
    }
}) 
}

function timerStart2(){
    const timerGetItemNodeList = document.getElementsByName('get-item');
    timerGetItemNodeList.forEach((node) => {
        if(node.checked){
            let remainingTotalSeconds2 = 101;
            progressBar2.classList.add(`on100s`);
            const soundEffect2 = new Audio(`soundEffect/sound3.mp3`);
            ticTac2 = setInterval(counting2, 1000);
            counting2();
            reset2 = setInterval(() => {remainingTotalSeconds2=101; soundEffect2.play();}, 100*999);
            function counting2(){
                --remainingTotalSeconds2;
                let remainingMinutes2 = ('0' + Math.floor(remainingTotalSeconds2/60)).slice(-2);
                let remainingSeconds2 = ('0' + Math.floor(remainingTotalSeconds2%60)).slice(-2);
                console.log(remainingTotalSeconds2);
                remainingTime2.innerText = `줍기 남은시간: ${remainingMinutes2}:${remainingSeconds2}`;
                }
            }
        }
        )
        timerOption.style.display = 'none';
        tictacArea.style.display = 'block';
}
    

function cancel(){
    clearInterval(ticTac);
    clearInterval(ticTac2);
    clearInterval(reset);
    clearInterval(reset2);
    progressBar.className = '';
    remainingTime.innerText = '';
    progressBar2.className = '';
    remainingTime2.innerText = '';
}

    
function clear(){
    const soundFinish = new Audio('soundEffect/sound7200.mp3')
    soundFinish.play();
    cancel();
    tictacArea.style.display = 'none';
    resultArea.style.display = 'block';

}

function timerCancel(){
    timerOption.style.display = 'block';
    tictacArea.style.display = 'none';
    cancel();
    }

function popUpTimer(){
    timer.style.backgroundImage = "url('img/OptionMenu5.backgrnd.png')";
    if(timer.style.display == 'block'){
        timer.style.display = 'none';
    } else{
        timer.style.display = 'block';
        tictacArea.style.display = 'none';
        resultArea.style.display = 'none';
    }
}

timerNpc.addEventListener('click', popUpTimer);
timerStartBtn.addEventListener('mouseover', () => timerStartBtn.style.backgroundImage = "url('img/SysOpt.BtOK.mouseOver.0.png')" );
timerStartBtn.addEventListener('mouseleave', () => timerStartBtn.style.backgroundImage = "url('img/SysOpt.BtOK.normal.0.png')" );
timerStartBtn.addEventListener('mousedown', () => timerStartBtn.style.backgroundImage = "url('img/SysOpt.BtOK.pressed.0.png')" );
timerStartBtn.addEventListener('mouseup', () => timerStartBtn.style.backgroundImage = "url('img/SysOpt.BtOK.normal.0.png')" );

timerCancelBtn.addEventListener('mouseover', () => timerCancelBtn.style.backgroundImage = "url('img/SysOpt.BtCancle.mouseOver.0.png')" );
timerCancelBtn.addEventListener('mouseleave', () => timerCancelBtn.style.backgroundImage = "url('img/SysOpt.BtCancle.normal.0.png')" );
timerCancelBtn.addEventListener('mousedown', () => timerCancelBtn.style.backgroundImage = "url('img/SysOpt.BtCancle.pressed.0.png')" );
timerCancelBtn.addEventListener('mouseup', () => timerCancelBtn.style.backgroundImage = "url('img/SysOpt.BtCancle.normal.0.png')" );
timer.style.display = 'none';


