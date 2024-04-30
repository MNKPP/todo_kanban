import Goal from "../models/goal.model.js";
import GoalDto from "../dto/goal.dto.js";

const goalService = {

    getById: async (id) => {
        const goal = await Goal.findOne({ _id: id });

        if (!goal) {
            throw new Error("Goal service getById method : Goal not found");
        }

        return new GoalDto(goal);
    },

    create: async (memberId, data) => {

        const createdGoal = new Goal({
            ...data,
            member_id: memberId
        });

        await createdGoal.save();

        return new GoalDto(createdGoal);
    },

    delete: async (id) => {
        const goalFound = await Goal.deleteOne({ _id: id })

        if (!goalFound) {
            throw new Error("Goal service delete method : Goal not found");
        }

        return goalFound;
    },

    update: async (id, data) => {
        const updatedGoal = await Goal.findOneAndUpdate({ _id: id }, data, { new: true });

        if (!updatedGoal) {
            throw new Error("Goal service update method : Goal not found");
        }

        return new GoalDto(updatedGoal);
    },

}

export default goalService;