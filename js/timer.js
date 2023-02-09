const remainingTime = document.getElementById('remainingTime');

function timerStart() {
    const timerNodeList = document.getElementsByName('timer');
    console.log(timerNodeList);
    timerNodeList.forEach((node) => {
      if(node.checked)  {
        const timerSet = Number(node.value);
        let count = 0;
        counting(); // start 눌렀을 때 바로 타이머 보이도록
        let ticTac = setInterval(counting, 1000);
        setTimeout(timesUp, timerSet*1000);
        function counting(){
            let remainingSeconds = (timerSet+1) - (++count); //바로 timer 보이게 하면 1초 줄어든 상태로 시작함. 따라서 이를 보정하고자 +1
            let minutes = ('0' + Math.floor(remainingSeconds/60)).slice(-2);
            let seconds = ('0' + Math.floor(remainingSeconds%60)).slice(-2);
            remainingTime.innerText = `${minutes}:${seconds}`;
        }
        function timesUp(){
            clearInterval(ticTac);
            remainingTime.innerText = '수고하셨습니다!';
        }
      }
    }) 
  }
