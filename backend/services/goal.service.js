import Goal from "../models/goal.model.js";
import GoalDto from "../dto/goal.dto.js";
import {Error} from "mongoose";

const goalService = {

    getAll: async () => {

    },

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

    delete: async (id) => {
        const goalFounded = await Goal.deleteOne({member_id: id})

        if (!goalFounded) {
            throw new Error("Goal not found");
        }

        return goalFounded;
    },

    update: async (id, data) => {

    },
}

export default goalService;