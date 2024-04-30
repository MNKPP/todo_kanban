import express from "express";
import memberController from "../controllers/member.controller.js";
import {authorizeMiddleware} from "../middlewares/auth.middleware.js";

const memberRouter = express.Router();

memberRouter.route('/goals')
    .get(authorizeMiddleware(), memberController.getAllGoalsForMember)

export default memberRouter;