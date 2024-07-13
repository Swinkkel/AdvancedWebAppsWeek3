if(document.readyState !== "loading"){
    console.log("Document is ready");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document ready after waiting!");
        initializeCode();
    })
}

function initializeCode() {
    const addTodoButton = document.getElementById("submit-data");
    addTodoButton.addEventListener("click", function() {
        const todoNameInput = document.getElementById("input-name");
        const todoTaskInput = document.getElementById("input-task");

        fetch("http://localhost:3000/todo", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: '{ "name": "' + todoNameInput.value + '", "task": "' + todoTaskInput.value + '" }'
           })
           .then(response => response.json())
           .then(data => {
                setStatus(data.text);
                console.log(data);
           })
    });

    const addSearchButton = document.getElementById("search");
    addSearchButton.addEventListener("click", function() {
        const searchNameInput = document.getElementById("search-name");

        fetch("http://localhost:3000/user/" + searchNameInput.value, {})
           .then(response => response.json())
           .then(data => {
                if (data.name) {
                    console.log("Show user");
                    showUser(data);
                }
                else {
                    console.log("Show status");
                    setStatus(data.text);
                }
                console.log(data);
           })
    });
}

function showUser(user) {
    console.log(user);
    const userDiv = document.getElementById("user");
    userDiv.replaceChildren();

    const nameElement = document.createElement('h1');
    nameElement.textContent = user.name;

    console.log(user.name);

    const todosListElement = document.createElement('ul');
    user.todos.forEach(todo => {
        const todoEntryElement = document.createElement('li');
        todoEntryElement.textContent = todo;
        todosListElement.appendChild(todoEntryElement);

        console.log(todo);
    })

    userDiv.appendChild(nameElement);
    userDiv.appendChild(todosListElement);
}

function setStatus(status) {
    console.log("Change status to: " + status)
    const statusText = document.getElementById("status");
    statusText.innerHTML = status;
}