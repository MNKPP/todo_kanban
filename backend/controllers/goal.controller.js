import goalService from "../services/goal.service.js";
import goalValidator from "../validators/goal.validator.js";
import res from "express/lib/response.js";


const goalController = {

    /**
     * GET /api/goal/${id}
     * @param {string} req.params.id - Goal ID
     * @return {GoalDto} 200 - Goal data - application/json
     * @return 404 - Goal not found
     */
    getById: async (req, res) => {
        const goalId = req.params.id;

        const goal = await goalService.getById(goalId);

        if (!goal) {
            res.status(404)
                .json({
                    errorMessage: "Goal controller getById method : Goal not found"
                });
            return;
        }

        res.status(200)
            .json(goal);
    },

    /**
     * POST /api/goal
     * @param {object} request.body - Goal data
     * @return {GoalDto} 201 - Created goal data - application/json
     * @return 400 - Invalid data or failed to create goal
     */
    create: async (req, res) => {
        const memberId =  req.token.id;
        const goalData = req.body;

        console.log(memberId, goalData)

        let validateData;
        try {
            validateData = await goalValidator.validate(goalData)
        } catch (error) {
            res.status(400)
                .json({
                    errorMessage: "Create method controller : invalid data !"
                });
            return;
        }

        const goalCreated = await goalService.create(memberId, validateData);

        if (!goalCreated) {
            res.status(400)
                .json({
                    errorMessage: "Create method controller : failed to create goal !"
                });
            return;
        }

        res.status(201)
            .location(`/api/goal/${goalCreated.id}`)
            .json(goalCreated);

    },

    /**
     * DELETE /api/goal/${id}
     * @param {string} req.params.id - Goal ID
     * @return 204 - Goal deleted successfully
     * @return 404 - Goal not found
     */
    delete: async (req, res) => {
        const goalId = req.params.id;

        const goal = await goalService.delete(goalId);

        if (!goal) {
            res.status(404)
                .json({
                    errorMessage: "Delete method controller : goal not found !"
                });
            return;
        }

        res.sendStatus(204);
    },

    /**
     * PUT /api/goal/${id}
     * @param {object} request.body - Updated goal data
     * @param {string} req.params.id - Goal ID
     * @return {GoalDto} 200 - Updated goal data - application/json
     * @return 400 - Invalid data
     * @return 404 - Goal not found
     */
    update: async (req, res) => {
        const goalId = req.params.id;
        const goalData = req.body;

        const existingGoal = await goalService.getById(goalId);

        if (!existingGoal) {
            res.status(404)
                .json({
                    errorMessage: "Update method controller : existing goal not found !"
                });
            return;
        }

        existingGoal.title = goalData.data?.title ?? existingGoal.title;
        existingGoal.description = goalData.data?.description ?? existingGoal.description;
        existingGoal.isFinished = goalData.data?.isFinished ?? existingGoal.isFinished;

        let validateData;
        try {
            validateData = await goalValidator.validate(existingGoal)
        } catch (error) {
            res.status(400)
                .json({
                    errorMessage: "Update method controller : invalid data !"
                });
            return;
        }

        const updatedGoal = await goalService.update(goalId, validateData);

        if (!updatedGoal) {
            res.status(404)
                .json({
                    errorMessage: "Update method controller : goal not found !"
                });
            return;
        }

        res.status(200)
            .json(updatedGoal);
    },
}

export default goalController;