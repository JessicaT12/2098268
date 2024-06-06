document.addEventListener('DOMContentLoaded', (event) => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const deleteButton = document.getElementById('deleteButton');
    const taskList = document.getElementById('taskList');
    const taskTotal = document.getElementById('taskTotal');

    taskInput.focus();
    
    function updateAddButtonState() {
        addButton.disabled = taskInput.value.trim() === '';
    }

    function updateDeleteButtonState() {
        deleteButton.disabled = !Array.from(taskList.children).some(task => task.firstChild.checked);
    }

    function updateTaskTotal() {
        const total = taskList.children.length;
        taskTotal.textContent = `(${total})`;
    }

    taskInput.addEventListener('input', updateAddButtonState);

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', () => {
                li.classList.toggle('strike-task');
                updateDeleteButtonState();
            });

            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(taskText));
            taskList.appendChild(li);
            taskInput.value = '';
            updateAddButtonState();
            updateTaskTotal();
            updateDeleteButtonState();
        }
    });

    deleteButton.addEventListener('click', () => {
        Array.from(taskList.children).forEach(task => {
            if (task.firstChild.checked) {
                taskList.removeChild(task);
            }
        });
        updateTaskTotal();
        updateDeleteButtonState();
    });

    updateAddButtonState();
    updateDeleteButtonState();
    updateTaskTotal();
});

