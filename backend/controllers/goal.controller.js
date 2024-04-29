import goalService from "../services/goal.service.js";
import goalValidator from "../validators/goal.validator.js";

const goalController = {

    getById: async (req, res) => {

    },

    create: async (req, res) => {
        const memberId =  req.token.id;
        const goalData = req.body;

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

    delete: async (req, res) => {
        const memberId = req.token.id;

        const goal = await goalService.delete(memberId);

        if (!goal) {
            res.status(404)
                .json({
                    errorMessage: "Goal not found"
                });
            return;
        }

        res.sendStatus(204);
    },

    update: async (req, res) => {

    },
}

export default goalController;