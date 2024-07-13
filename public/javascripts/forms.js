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
               console.log(data);
           })
    });

    const addSearchButton = document.getElementById("search");
    addSearchButton.addEventListener("click", function() {
        const searchNameInput = document.getElementById("search-name");

        fetch("http://localhost:3000/users/" + searchNameInput.value, {})
           .then(response => response.json())
           .then(data => {
               console.log(data);
           })
    });
}