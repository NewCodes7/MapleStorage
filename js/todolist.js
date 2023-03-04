const todoInput = document.querySelector(".todo-input");
const todo = document.querySelector("#todo");
const todoList = document.querySelector(".todo-list");
let listArray = [];
const todoNpc = document.getElementById('todoNpc');
const quest = document.getElementById('quest');
const questHidden = document.getElementById('quest-hidden');

let memoryCheck = 0;

function handleTodo(event){
    event.preventDefault();
    //배열 형태로 저장
    const newTodo = {
        text: todo.value,
        id: Date.now(),
        check: false,
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

    li.classList.add(memoryCheck);
    memoryCheck += 1;

    label.classList.add('waitingClick2')
    const waitingClick2 = document.querySelectorAll('.waitingClick2');
    input.style.cursor = 'none';
    button.style.cursor = 'none';
    addClickCursor(waitingClick2);

    li.style.textAlign = 'left';
    li.style.marginTop = '2px';

    
    //삭제하기, checked
    button.addEventListener("click", handleDelete);
    input.addEventListener('click', handleComplete);
    }



function handleComplete(event){
    const isChecked = event.target.checked;
    const liText = event.target.nextSibling;

    let whoIsChecked = event.target.parentElement.parentElement.classList[0];
    listArray = JSON.parse(localStorage.getItem('newtodo'));

    if(isChecked){
        liText.classList.add('strikeThrough');
        listArray[whoIsChecked].check = true;
    } else {
        liText.classList.remove('strikeThrough');
        listArray[whoIsChecked].check = false;
    }
    localStorage.setItem('newtodo', JSON.stringify(listArray));
}

function handleDelete(event){
    const Xparent = event.target.parentElement.parentNode;
    Xparent.remove();
    const resultTodo = listArray.filter((obj)=> obj.id !== parseInt(Xparent.id));
    listArray = resultTodo;
    localStorage.setItem('newtodo', JSON.stringify(resultTodo));
    clickCursor.style.display = 'none';
}

todoInput.addEventListener("submit", handleTodo);
todoNpc.addEventListener('click', popUpQuest);

function popUpQuest(){
    if (window.innerWidth < 1128) {
        deleteTaxiWindow();
        deleteTimerWindow();
    }
    
    memoryCheck = 0;

    if(quest.style.visibility == 'visible'){
        quest.style.visibility = 'hidden';
        todoList.textContent = '';
    } else{
        quest.style.visibility = 'visible';
        todoList.textContent = '';
    }

    listArray = JSON.parse(localStorage.getItem('newtodo')) || [];

    if(listArray.length != 0){    
        let i = 0;
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
        label.classList.add('waitingClick2')
    const waitingClick2 = document.querySelectorAll('.waitingClick2');
    input.style.cursor = 'none';
    button.style.cursor = 'none';
    addClickCursor(waitingClick2);

    if(listArray[i].check){
        span.classList.add('strikeThrough');
        input.checked = true;
    } 

    li.classList.add(memoryCheck);
    memoryCheck += 1;

        li.style.textAlign = 'left';
        li.style.marginTop = '2px';
    
        button.addEventListener("click", handleDelete);
        input.addEventListener('click', handleComplete);
        i++;}
    }
}


