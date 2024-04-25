import express from "express";
import authRouter from "./auth.router.js";

const mainRouter = express.Router();

mainRouter.route('/')
    .get((req, res) => {
        res.send('First route configured.')
    })

mainRouter.use('/auth', authRouter);

export default mainRouter;