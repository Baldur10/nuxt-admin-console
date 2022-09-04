import express from 'express';
import cors from 'cors';
import {Main} from './src/config'
import User from './src/routes/user';
require(`dotenv`).config();
Main()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/admin',User);

app.listen(process.env.PORT);
