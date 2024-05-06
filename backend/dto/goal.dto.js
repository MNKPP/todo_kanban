/**
 * A Goal
 * @typedef {object} GoalDto
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {boolean} isFinished
 * @property {array} tasks
 */
class GoalDto {
    constructor({id, title, description, isFinished, tasks}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isFinished = isFinished;
        this.tasks = tasks;
    }
}

export default GoalDto;