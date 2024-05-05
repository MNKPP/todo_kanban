import express from 'express';
import goalController from "../controllers/goal.controller.js";
import taskController from "../controllers/task.controller.js";
import {authorizeMiddleware} from "../middlewares/auth.middleware.js";

const goalRouter = express.Router();

goalRouter.route('/')
    .post(authorizeMiddleware(), goalController.create);

goalRouter.route('/:id')
    .get(authorizeMiddleware(), goalController.getById)
    .put(authorizeMiddleware(), goalController.update)
    .delete(authorizeMiddleware(), goalController.delete)

goalRouter
    // .get('/:goalId/tasks', taskController.getAllTasksForGoal)
    .post('/:id/task', taskController.create)
    // .get('/:id/task/:taskId', taskController.getById)
    // .put('/:id/task/:taskId', taskController.update)
    // .delete('/:id/task/:taskId', taskController.delete)

export default goalRouter;