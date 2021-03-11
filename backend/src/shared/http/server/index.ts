import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import dotenv from 'dotenv';

import RouterPublic from '../routers/public';
import RouterPrivate from '../routers/private';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/', RouterPublic);
app.use('/', RouterPrivate);
app.use(errors());  

app.listen(process.env.PORT_SERVER, () => console.log('Server running on port ' + process.env.PORT_SERVER + '!'));