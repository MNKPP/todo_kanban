import taskService from "../services/task.service.js";
import Goal from "../models/goal.model.js";

const taskController = {

    create: async (req, res) => {
        const memberId =  req.token.id;
        const goalId = req.params.id;

        const goal = await Goal.findById(goalId);

        if (!goal) {
            res.status(404)
                .json({ error: "Goal not found" });
            return;
        }

        const createdTask = await taskService.create(memberId, goal, req.body);

        if (!createdTask) {
            res.status(500)
                .json({ error: "Failed to create task" });
        }

        res.status(201)
            .json(createdTask);
    },



}

export default taskController;