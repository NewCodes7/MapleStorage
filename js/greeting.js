const logInForm = document.querySelector('.logIn-form');
const greeting = document.getElementById('greeting');
const savedUsername = localStorage.getItem('username');

function handleLogIn(event){
    event.preventDefault();
    const username = document.getElementById('input').value;
    localStorage.setItem('username', username);
    logInForm.classList.add('hidden');
    greeting.innerText = `${username}'s QUEST`;
    bgm.play();
    bgm.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false);
}

if(savedUsername !== null){
    logInForm.classList.add('hidden');
    greeting.innerText = `${savedUsername}'s QUEST`;
} 

logInForm.addEventListener("submit", handleLogIn);