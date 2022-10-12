const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = []; // 업데이트될 수 있게 const -> let으로 변경함
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement; // 클릭한 버튼의 부모 요소인 li 알려주기
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDos안의 요소를 전부 확인했을 때, 삭제되는 li의 id값과 일치하는 요소를 제외한 새 배열을 만들어서 toDos에 넣어주기
    saveToDos(); // 바뀐 toDos로 local에 저장
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // 전달받은 투두객체의 text부분이 투두 내용
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span); // li 안에 span 넣어주기
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj); // toDos 배열에 새로운 투두객체 추가!
    paintToDo(newTodoObj); // 화면에 그려주기
    saveToDos(); // localStorage에 저장하는 함수 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // js가 이해할 수 있는 배열 형태로 바꿈
    toDos = parsedToDos; // toDos배열에 지난번에 입력해둔(localStorage에 있던) 투두들 넣어주기
    parsedToDos.forEach(paintToDo);
}