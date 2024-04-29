import express from "express";
import authRouter from "./auth.router.js";
import goalRouter from "./goal.router.js";
import memberRouter from "./member.router.js";

const mainRouter = express.Router();

mainRouter.route('/')
    .get((req, res) => {
        res.send('First route configured.')
    })

mainRouter.use('/auth', authRouter);
mainRouter.use('/member', memberRouter);
mainRouter.use('/goal', goalRouter);

export default mainRouter;