let isTaxi = false;
let isQuest = false;
let isTimer = false;

function deleteTaxiWindow(){
    if(isTaxi = true){
        taxiInfo.style.visibility = 'hidden';
        isTaxi = false;
    }
}

function deleteQuestWindow(){
    if(isQuest = true){
        quest.style.visibility = 'hidden';
        isQuest = false;
    }
}

function deleteTimerWindow(){
    if(isTimer = true){
        timer.style.visibility = 'hidden';
        isTimer = false;
    }
}