import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router4 from './routes/router4.js';
import {router as router1} from './routes/router1.js';
import router5 from './routes/router5.js';
import router6 from './routes/router6.js';
import router7 from './routes/router7.js';
import router8 from './routes/router8.js';
import router9 from './routes/router9.js';
import router10 from './routes/router10.js';
import router11 from './routes/router11.js';
import connect from './db.js';
import Daily from './Models/Daily.js';

connect();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());


app.use("/",router1)
app.use("/adminVerif",router4);
app.use("/checkuser",router5);
app.use("/storedata",router6);
app.use('/new',router7);
app.use('/update',router8);
app.use('/delete',router9);
app.use('/fetchdata',router10);
app.use('/commitdata',router11)



app.listen(PORT,console.log(`Server started on port ${PORT}`));