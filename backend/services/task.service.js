import TaskDto from "../dto/task.dto.js";

const taskService = {

    create: async (memberId, goal, data) => {

        goal.tasks.push(data);

        await goal.save();

        return new TaskDto(goal);
    },
}

export default taskService;