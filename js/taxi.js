const taxi = document.getElementById('taxi');
const bgm = document.getElementById('bgm');
const bgAndBgm = document.getElementById('bgAndBgm');
const background = document.getElementById('background');

function onTaxi(){
    const taxiText = document.createElement('img');
    taxiText.src = 'img/임시메모장.png';
    taxiText.id = 'taxiText';
    bgAndBgm.appendChild(taxiText);
    selectTown('커닝시티');
    selectTown('엘리니아');
    selectTown('슬리피우드');
}

function selectTown(townName){
    const town = document.createElement('button');
    town.innerText = townName;
    town.id = townName;
    bgAndBgm.appendChild(town);
    town.addEventListener('click', moveTown); //스코프 덕분에 이렇게 간결하게 쓸 수 있는건가?
} 

function moveTown(event){
    background.src = `img/${event.target.id}.png`;
    bgm.src = `music/${event.target.id}.mp3`;
    bgAndBgm.innerHTML = '';
    bgm.play();
    bgm.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false); // false는 무엇을 나타내는거지?
}

taxi.addEventListener('click', onTaxi);
