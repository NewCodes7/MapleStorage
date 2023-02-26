const timerNpc = document.getElementById('timerNpc');
const timer = document.getElementById('TIMER');
const timerHidden = document.getElementById('timer-hidden');
const progressBar = document.getElementById('progressBar');
const progressBar2 = document.getElementById('progressBar2');
const progressArea = document.getElementById('progress-area');
const progressArea2 = document.getElementById('progress-area2');
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
let resetTotalCount;

const result_startTime = document.getElementById('result-starttime');
const result_stopTime = document.getElementById('result-stoptime');
const result_totalCount = document.getElementById('result-totalcount');
const result_expCoupon = document.getElementById('result-expcoupon');
const result_item = document.getElementById('result-item');

let memoryStart;


function timerStart() {
    setTimeout(clear, 2000); //2 * 60 * 60 * 1000
    memoryStart = clock.innerText;
    console.log(result_startTime);
//경쿠 카운트
    const timerNodeList = document.getElementsByName('timer');
    timerNodeList.forEach((node) => {
      if(node.checked)  {
        progressArea.style.display = 'block';

        const timerSet = Number(node.value);
        let count = -1;
        
        counting(); // start 눌렀을 때 바로 타이머 보이도록
        progressBar.classList.add(`on${timerSet}s`);
        const soundEffect = new Audio(`soundEffect/sound${timerSet}.mp3`);
        ticTac = setInterval(counting, 1000);
        reset = setInterval(() => {count=-1; soundEffect.play(); }, timerSet*999); //왜 화살표 함수로?, 1000으로 했을 때 첫 주기에서 1초 더 홀딩함(4초 기다리고 바뀜)
        
        function counting(){
            let remainingTotalSeconds = timerSet - (++count);
            
            let remainingMinutes = ('0' + Math.floor(remainingTotalSeconds/60)).slice(-2);
            let remainingSeconds = ('0' + Math.floor(remainingTotalSeconds%60)).slice(-2);
            
            remainingTime.innerText = `경쿠 남은시간: ${remainingMinutes}:${remainingSeconds}`;
            
        }
        timerOption.style.display = 'none';
        tictacArea.style.display = 'block';
    }
}) 
if(remainingTime.innerText == ''){
    progressArea.style.display = 'none';
}

//총 사냥시간 카운트
let totalCount = -1;
resetTotalCount = setInterval(totalCounting, 1000);
totalCounting();
function totalCounting(){
    totalCount += 1;
    let countUpMinutes = ('0' + Math.floor(totalCount/60)).slice(-2);
    let countUpSeconds = ('0' + Math.floor(totalCount%60)).slice(-2);
    totalTime.innerText = `총 사냥시간: ${countUpMinutes}:${countUpSeconds}`
}


//메소줍기 카운트
    const timerGetItemNodeList = document.getElementsByName('get-item');
    timerGetItemNodeList.forEach((node) => {
        if(node.checked){
            progressArea2.style.display = 'block';
            let remainingTotalSeconds2 = 101;
            progressBar2.classList.add(`on100s`);
            const soundEffect2 = new Audio(`soundEffect/sound100.mp3`);
            ticTac2 = setInterval(counting2, 1000);
            counting2();
            reset2 = setInterval(() => {remainingTotalSeconds2=101; soundEffect2.play();}, 100*999);
            function counting2(){
                --remainingTotalSeconds2;
                let remainingMinutes2 = ('0' + Math.floor(remainingTotalSeconds2/60)).slice(-2);
                let remainingSeconds2 = ('0' + Math.floor(remainingTotalSeconds2%60)).slice(-2);
                remainingTime2.innerText = `줍기 남은시간: ${remainingMinutes2}:${remainingSeconds2}`;
                }
            } else {
                progressArea2.style.display = 'none';
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
    clearInterval(resetTotalCount);
    progressBar.className = '';
    remainingTime.innerText = '';
    progressBar2.className = '';
    remainingTime2.innerText = '';
    totalTime.innerText = '';
}

    
function clear(){
    const soundFinish = new Audio('soundEffect/sound7200.mp3')
    soundFinish.play();
    cancel();
    tictacArea.style.display = 'none';
    resultArea.style.display = 'block';
    timerResult();
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

function timerResult(){
    result_startTime.innerText = `사냥 시작시각: ${memoryStart}` 
    result_stopTime.innerText = `사냥 시작시각: ${memoryStart}` //변수저장
    result_totalCount.innerText = `사냥 시작시각: ${memoryStart}` //변수저장
    result_expCoupon.innerText = `사냥 시작시각: ${memoryStart}` //변수저장 + setinterval에 끼워두기
    result_item.innerText = `사냥 시작시각: ${memoryStart}` // 마찬가지
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


