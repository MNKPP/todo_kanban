/**
 * A Goal
 * @typedef {object} GoalDto
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {boolean} isFinished
 */
class GoalDto {
    constructor({id, title, description, isFinished}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isFinished = isFinished;
    }
}

export default GoalDto;