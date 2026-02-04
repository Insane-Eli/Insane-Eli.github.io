/* 
im gonna be honest this whole js file was NOT written by me and was completely COPY AND PASTED from CHATGPT like 2 years ago :grimacing:
(honestly though its at least kinda neat and it functions so im gonna keep it here lol.)
*/

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task) {
        const todoList = document.getElementById('todoList');

        const li = document.createElement('li');
        li.textContent = task;

        li.onclick = function() {
            removeTask(li);
        };

        todoList.appendChild(li);
        saveTasks();

        taskInput.value = '';
    }
}

function removeTask(taskElement) {
    taskElement.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];

    document.querySelectorAll('#todoList li').forEach(task => {
        tasks.push(task.textContent);
    });

    const tasksString = JSON.stringify(tasks);
    document.cookie = `tasks=${tasksString}; path=/; max-age=365 * 24 * 60 * 60`;

}

function loadTasks() {
    const cookieString = document.cookie;

    const cookies = cookieString.split('; ').find(row => row.startsWith('tasks='));

    if (cookies) {
        const tasks = JSON.parse(cookies.split('=')[1]);

        const todoList = document.getElementById('todoList');
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;

            li.onclick = function() {
                removeTask(li);
            };

            todoList.appendChild(li);
        });
    } else {
        console.log("No tasks found in cookies.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadTasks();

    const taskInput = document.getElementById('taskInput');
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
