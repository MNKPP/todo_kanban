import express from "express";

const mainRouter = express.Router();

mainRouter.route('/')
    .get((req, res) => {
        res.send('First route configured.')
    })

export default mainRouter;