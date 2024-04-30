import API from "./index.js";

export const fetchAllGoalsMember = async () => {
    try {
        const response = await API.get(`/member/goals`);
        return response;
    } catch(error) {
        console.error(error);
    }
}

export const createGoal = async (goalData) => {
    try {
        const response = await API.post(`/goal`, {title : goalData});
        return response;
    } catch(error) {
        console.error(error);
    }
}