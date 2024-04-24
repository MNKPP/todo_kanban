import dotenv from 'dotenv';
import express, {json} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from "./routers/index.js";
import connectDb from "./models/index.js";

dotenv.config();

const { NODE_ENV, PORT} = process.env;

const app = express();

connectDb();

app.use(morgan('tiny'));
app.use(cors());

app.use('/api', mainRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${NODE_ENV}`);
})