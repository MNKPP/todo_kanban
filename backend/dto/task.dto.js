/**
 * A Task
 * @typedef {object} TaskDto
 * @property {string} [id] - The unique identifier for the task (optional for creation)
 * @property {string} title - The title of the task
 * @property {string} day - The day when doing the task
 * @property {string[]} tags - A list of tags associated with the task
 * @property {boolean} finished - Status indicating if the task is finished
 */
class TaskDto {
    constructor({id, title, day, tags, finished}) {
        this.id = id;
        this.title = title;
        this.day = day;
        this.tags = tags;
        this.finished = finished;
    }
}

export default TaskDto;
