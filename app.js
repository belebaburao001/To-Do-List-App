let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    if (task) {
        tasks.push(task);
        taskInput.value = '';
        displayTasks();
    } else {
        alert('Please enter a task.');
    }
}


function removeTask(task){
    const index = tasks.indexOf(task);
    if(index > -1){
        tasks.splice(index, 1);
        displayTasks();
    }
}

function displayTasks(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(task);

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}