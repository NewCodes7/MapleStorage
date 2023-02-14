const taxi = document.getElementById('taxi');
const bgm = document.getElementById('bgm');
const background = document.getElementById('background');
const taxiInfo = document.getElementById('taxiInfo');
let waitingClick = document.querySelectorAll('.waitingClick');

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
    background.src = `img/${event.target.id}.png`;
    bgm.src = `music/${event.target.id}.mp3`;
    taxiInfo.innerHTML = '';
    taxiInfo.style.backgroundImage = "url('')";
    bgm.play();
    bgm.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false); // false는 무엇을 나타내는거지?
}

waitingClick.forEach(element => {
    element.addEventListener('mouseenter', event => event.target.classList.add('clickCursor'));
    element.addEventListener('mouseleave', event => event.target.classList.remove('clickCursor'));
});


taxi.addEventListener('click', onTaxi);
