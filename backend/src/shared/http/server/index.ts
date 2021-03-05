import express from 'express';

import RouterPublic from '../routers/public';
import RouterPrivate from '../routers/private';

const app = express();

app.use('/', RouterPublic);
app.use('/', RouterPrivate);

app.listen(3333, () => console.log('Server running on port 3333!'));