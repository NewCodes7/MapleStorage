const todoInput = document.querySelector(".todo-input");
const todo = document.querySelector("#todo");
const list = document.querySelector("list");
const todoList = document.querySelector(".todo-list");
let listArray = [];
const todoNpc = document.getElementById('todoNpc');
const quest = document.getElementById('quest');
const questHidden = document.getElementById('quest-hidden');

function handleTodo(event){
    event.preventDefault();
    //배열 형태로 저장
    const newTodo = {
        text: todo.value,
        id: Date.now(),
    };
    listArray.push(newTodo);
    localStorage.setItem('newtodo', JSON.stringify(listArray));
    todo.value = '';
    
    //li 화면에 보이도록 구현
    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    li.id = newTodo.id;
    span.innerText = newTodo.text;
    li.style.listStyle = 'none';
    todoList.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
    label.appendChild(span);
    input.type = 'checkbox';
    const button = document.createElement('button');
    label.appendChild(button);
    button.innerText = '🗑';
    button.style.border = 'none'
    button.style.backgroundColor = 'transparent'
    button.classList.add('clickCursor');
    input.classList.add('clickCursor');
    li.style.textAlign = 'left';
    li.style.marginTop = '2px';

    
    //삭제하기, checked
    button.addEventListener("click", handleDelete);
    input.addEventListener('click', handleComplete);
    }



function handleComplete(event){
    const isChecked = event.target.checked;
    const liText = event.target.nextSibling;
    if(isChecked){
        liText.classList.add('strikeThrough');
    } else {
        liText.classList.remove('strikeThrough');
    }
}

function handleDelete(event){
    const Xparent = event.target.parentElement.parentNode;
    Xparent.remove();
    const resultTodo = listArray.filter((obj)=> obj.id !== parseInt(Xparent.id));
    listArray = resultTodo;
    localStorage.setItem('newtodo', JSON.stringify(resultTodo));
}

todoInput.addEventListener("submit", handleTodo);
todoNpc.addEventListener('click', popUpQuest);

function popUpQuest(){
    deleteTaxiWindow();
    deleteTimerWindow();

    if(quest.style.display == 'block'){
        quest.style.display = 'none';
        todoList.textContent = '';
    } else{
        quest.style.display = 'block';
        todoList.textContent = '';
    }
    quest.style.backgroundImage = "url('img/Quest.list.backgrnd.png')";

    if(listArray.length != 0){    
        let i = 0;
        listArray = JSON.parse(localStorage.getItem('newtodo'));
        while(i<listArray.length){
            // 중복 어떻게 제걸할 것인가?
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        li.id = listArray[i].id;
        span.innerText = listArray[i].text;
        li.style.listStyle = 'none';
        todoList.appendChild(li);
        li.appendChild(label);
        label.appendChild(input);
        label.appendChild(span);
        input.type = 'checkbox';
        const button = document.createElement('button');
        label.appendChild(button);
        button.innerText = '🗑';
        button.style.border = 'none'
        button.style.backgroundColor = 'transparent'
        button.classList.add('clickCursor');
        input.classList.add('clickCursor');
        li.style.textAlign = 'left';
        li.style.marginTop = '2px';
    
        button.addEventListener("click", handleDelete);
        input.addEventListener('click', handleComplete);
        i++;}
    }
}
quest.style.display = 'none';


const button = document.querySelector('.tooltip-button'); //쿼리셀렉터와 클래스네임의 차이점??
const tooltipText = document.querySelector('.tooltip-text');

button.addEventListener('mouseover', () => {
  tooltipText.style.display = 'block';
});

button.addEventListener('mouseout', () => {
  tooltipText.style.display = 'none';
});

