let tasks = [{description: "Buy groceries", completed: false, id: 1},
             {description: "Walk the dog", completed: true, id: 2},
             {description: "Read a book", completed: false, id: 3}];
function addTask(description) {
    const newTask = {
        description: description,
        completed: false,
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
    };
    tasks.push(newTask);
}
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}
function toggleTaskCompletion(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return {...task, completed: !task.completed};
        }
        return task;
    });
}
function getTasks() {
    return tasks;
}

module.exports = {
    addTask,
    removeTask,
    toggleTaskCompletion,
    getTasks
};  