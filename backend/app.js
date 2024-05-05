import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from "./routers/index.js";
import connectDb from "./models/index.js";
import expressJSDocSwagger from 'express-jsdoc-swagger';
import swaggerOption from './swagger.option.js';
import { authTokenMiddleware } from "./middlewares/auth.middleware.js";


dotenv.config();

const { NODE_ENV, PORT} = process.env;

const app = express();

expressJSDocSwagger(app)(swaggerOption);

connectDb();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(authTokenMiddleware());

app.use('/api', mainRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${NODE_ENV}`);
})