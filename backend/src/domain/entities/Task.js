class Task{
    constructor(id, title, description, status, priority, dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}
module.exports = Task;