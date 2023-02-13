const taxi = document.getElementById('taxi');
const bgm = document.getElementById('bgm');
const background = document.getElementById('background');
const taxiInfo = document.getElementById('taxiInfo');

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
    town.className = 'townIcon';
    town.src = `img/${town.id}주문서.png`
    taxiInfo.append(town);
    town.addEventListener('mouseenter', cursorSwitch);
    // town.addEventListener('mouseleave', );
    town.addEventListener('click', moveTown); //스코프 덕분에 이렇게 간결하게 쓸 수 있는건가?
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



function cursorSwitch(event){
    document.body.style.cursor = "none";
    const newCursor = document.createElement('img');
    newCursor.src = 'img/Cursor.1.gif';
    newCursor.id = 'newCursor';
    document.body.appendChild(newCursor);
    "clientX: ", event.clientX, 
    "clientY:", event.clientY
}

taxi.addEventListener('click', onTaxi);
