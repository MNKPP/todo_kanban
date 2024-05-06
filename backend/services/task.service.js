import TaskDto from "../dto/task.dto.js";

const taskService = {

    create: async (memberId, goal, data) => {

        goal.tasks.push(data);

        const task = goal.tasks.slice(-1)[0];

        await goal.save();

        return new TaskDto(task);
    },
}

export default taskService;