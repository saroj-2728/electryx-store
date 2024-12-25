import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import profileControlRoute from './routes/profileControlRoute.js'

dotenv.config();
const app = express();

app
    .use(express.json())
    .use(cors({
        origin: process.env.CLIENT_URL,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }));

app.use('/api/profile/', profileControlRoute)

export default app