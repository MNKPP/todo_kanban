import express from "express";
import memberController from "../controllers/member.controller.js";

const memberRouter = express.Router();

memberRouter.route('/:id/goals')
    .get(memberController.getAllGoalsForMember)

export default memberRouter;