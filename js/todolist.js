const todoInput = document.querySelector(".todo-input");
const todo = document.querySelector("#todo");
const list = document.querySelector("list");
const todoList = document.querySelector(".todo-list");
let listArray = [];
const todoNpc = document.getElementById('todoNpc');
const quest = document.getElementById('quest');

function handleTodo(event){

    //배열 형태로 저장
    event.preventDefault();
    const newTodo = {
        text: todo.value,
        id: Date.now(),
    };
    listArray.push(newTodo);
    localStorage.setItem('newtodo', JSON.stringify(listArray));
    todo.value = '';

    //li 화면에 보이도록 구현
    const li = document.createElement('li');
    li.id = newTodo.id;
    todoList.appendChild(li);
    li.innerText = newTodo.text;
    const button = document.createElement('button');
    li.appendChild(button);
    button.innerText = 'X';

    //삭제하기
    button.addEventListener("click", handleDelete);
}

function handleDelete(event){
    const currentTodo = localStorage.getItem('newtodo');
    const objCurrentTodo = JSON.parse(currentTodo);
    const Xparent = event.target.parentElement;
    Xparent.remove();
    const resultTodo = objCurrentTodo.filter((obj)=> obj.id !== parseInt(Xparent.id));
    localStorage.setItem('newtodo', JSON.stringify(resultTodo));
}

todoInput.addEventListener("submit", handleTodo);
todoNpc.addEventListener('click', () => quest.classList.remove('hidden'));