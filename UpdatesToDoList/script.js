function addTask() {
    const taskList = document.getElementById("taskList");
    const inputField = document.getElementById("inputField");
    const taskText = inputField.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <button class="deleteBtn" onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(listItem);
    inputField.value = "";
}

function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentNode);
}

function enterKey(event) {
    if (event.key === "Enter") {
        addTask();
    }
}