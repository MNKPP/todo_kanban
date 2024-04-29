import express from 'express';
import goalController from "../controllers/goal.controller.js";

const goalRouter = express.Router();

goalRouter.route('/create')
    .post(goalController.create);

goalRouter.route('/:id')
    .delete(goalController.delete)


export default goalRouter;