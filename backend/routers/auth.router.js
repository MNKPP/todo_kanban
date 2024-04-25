import express from 'express';
import memberController from "../controllers/member.controller.js";

const authRouter = express.Router();

authRouter.route('/login')
    .post(memberController.login)


authRouter.route('/register')
    .post(memberController.register)

export default authRouter;