import express from 'express';
import goalController from "../controllers/goal.controller.js";
import {authorizeMiddleware} from "../middlewares/auth.middleware.js";

const goalRouter = express.Router();

goalRouter.route('/')
    .post(authorizeMiddleware(), goalController.create);

goalRouter.route('/:id')
    .get(goalController.getById)
    .put(goalController.update)
    .delete(goalController.delete)


export default goalRouter;