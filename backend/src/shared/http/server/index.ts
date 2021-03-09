import express from 'express';
import cors from 'cors';

import RouterPublic from '../routers/public';
import RouterPrivate from '../routers/private';

const app = express();

app.use(express.json());
app.use(cors())
app.use('/', RouterPublic);
app.use('/', RouterPrivate);

app.listen(3333, () => console.log('Server running on port 3333!'));