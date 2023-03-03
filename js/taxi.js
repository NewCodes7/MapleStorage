const taxi = document.getElementById('taxi');
const bgm = document.getElementById('bgm');
const background = document.getElementById('background');
const taxiInfo = document.getElementById('taxiInfo');
const logo = document.getElementById('logo');
const townIconWrapper = document.getElementById('townIcon-Wrapper');

const townIcon = document.querySelectorAll('.townIcon');

bgm.style.display = 'none';

for (let i = 0; i < townIcon.length; i++) {
    townIcon[i].classList.add('waitingClick');
    townIcon[i].addEventListener('click', moveTown); 
  }

function onTaxi(){
    if (window.innerWidth < 1128) {
        deleteQuestWindow();
        deleteTimerWindow();
    }
    if(taxiInfo.style.visibility == 'visible'){
        taxiInfo.style.visibility = 'hidden';
    } else{
        taxiInfo.style.visibility = 'visible';
        isTaxi = true;
    }
}


function moveTown(event){
    bgm.style.display = 'block';
    background.style.backgroundImage = `url('img/${event.target.id}.png')`; //바깥만 백틱 감싸면 안은 알아서 되나보다
    //background.style.backgroundImage = "url(`img/${event.target.id}.png`)"; 
    //백틱기호 안되는거 당연!! css에 맞게 줘야지.. 이거는 es6만의 문법이니 그런데 src는 됐잖아? 빠같에 싸져있어서 그랬나 이거는 안에 싸져있으니
    bgm.src = `music/${event.target.id}.mp3`;
    taxiInfo.style.visibility = 'hidden';
    bgm.play();
    bgm.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false); // false는 무엇을 나타내는거지?
}

function goHome(){
    bgm.style.display = 'block';

    background.style.backgroundImage = "url('img/tutorial.jpeg')";
    bgm.src = 'music/(구)로그인.mp3';
    bgm.play();
    bgm.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false);
}




taxi.addEventListener('click', onTaxi);
logo.addEventListener('click', goHome);
