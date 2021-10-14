import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import routes from './route';

dotenv.config();

const PORT = process.env.PORT || 9000;
const app: Express = express();

// const path = require('path');
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));