const todoForm = document.getElementById("todo-form");
const toDoInput = document.getElementById("#todo-form input");
const toDoList = document.getElementById("todo-list");
 

function handleToDoSubmit(event) {
    event.preventDefault;
    console.log(toDoInput.value);
}

todoForm.addEventListener("submit", handleToDoSubmit);