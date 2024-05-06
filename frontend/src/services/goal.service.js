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

export const updateGoal = async (id, data) => {
    try {
        const response = await API.put(`/goal/${id}`, {data});
        return response;
    } catch(error) {
        console.error(error);
    }
}

export const createTask = async (id, data) => {
    try {
        const response = await API.post(`/goal/${id}/task`, data);
        return response;
    } catch (error) {
        console.log(error)
    }
}