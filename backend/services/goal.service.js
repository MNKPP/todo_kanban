import Goal from "../models/goal.model.js";
import GoalDto from "../dto/goal.dto.js";

const goalService = {

    getById: async (id) => {

    },

    create: async (memberId, data) => {

        const createdGoal = new Goal({
            ...data,
            member_id: memberId
        });

        await createdGoal.save();

        return new GoalDto(createdGoal);
    },

    update: async (id, data) => {

    },

    delete: async (id) => {
        const goalFound = await Goal.deleteOne({member_id: id})

        if (!goalFound) {
            throw new Error("Goal service delete method : Goal not found");
        }

        return goalFound;
    },
}

export default goalService;