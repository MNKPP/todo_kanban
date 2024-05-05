/**
 * A Task
 * @typedef {object} TaskDto
 * @property {string} [id] - The unique identifier for the task (optional for creation)
 * @property {string} title - The title of the task
 * @property {string} startDate - The start date of the task
 * @property {string} endDate - The end date of the task
 * @property {string[]} tags - A list of tags associated with the task
 * @property {boolean} finished - Status indicating if the task is finished
 */
class TaskDto {
    constructor({id, title, startDate, endDate, tags, finished}) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.tags = tags;
        this.finished = finished;
    }
}

export default TaskDto;
