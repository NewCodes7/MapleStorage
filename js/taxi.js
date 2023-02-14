const taxi = document.getElementById('taxi');
const bgm = document.getElementById('bgm');
const background = document.getElementById('background');
const taxiInfo = document.getElementById('taxiInfo');
const waitingClick = document.querySelectorAll('.waitingClick');
const logo = document.getElementById('logo');

function onTaxi(){
    taxiInfo.style.backgroundImage = "url('img/SysOpt.backgrnd.png')";
    selectTown('헤네시스');
    selectTown('페리온');
    selectTown('커닝시티');
    selectTown('엘리니아');
    selectTown('슬리피우드');
}

function selectTown(townName){
    const town = document.createElement('img');
    town.id = townName;
    town.className = 'townIcon waitingClick';
    town.src = `img/${town.id}주문서.png`
    taxiInfo.append(town);
    town.addEventListener('click', moveTown); //스코프 덕분에 이렇게 간결하게 쓸 수 있는건가?
    town.addEventListener('mouseenter', event => event.target.classList.add('clickCursor'));
    town.addEventListener('mouseleave', event => event.target.classList.remove('clickCursor'));  //맨 아래 코드랑 중복되는 느낌인데 해결할 수 았나?
} 

function moveTown(event){
    const townBackgrnd = `img/${event.target.id}.png`
    background.style.backgroundImage = `url('img/${event.target.id}.png')`; //바깥만 백틱 감싸면 안은 알아서 되나보다
    //background.style.backgroundImage = "url(`img/${event.target.id}.png`)"; 
    //백틱기호 안되는거 당연!! css에 맞게 줘야지.. 이거는 es6만의 문법이니 그런데 src는 됐잖아? 빠같에 싸져있어서 그랬나 이거는 안에 싸져있으니
    bgm.src = `music/${event.target.id}.mp3`;
    taxiInfo.innerHTML = '';
    taxiInfo.style.backgroundImage = "url('')";
    bgm.play();
    bgm.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false); // false는 무엇을 나타내는거지?
}

function goHome(){
    background.style.backgroundImage = "url('img/tutorial.jpeg')";
    bgm.src = 'music/(구)로그인.mp3';
    bgm.play();
    bgm.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false);
}

waitingClick.forEach(element => {
    element.addEventListener('mouseenter', event => event.target.classList.add('clickCursor'));
    element.addEventListener('mouseleave', event => event.target.classList.remove('clickCursor'));
});


taxi.addEventListener('click', onTaxi);
logo.addEventListener('click', goHome)
