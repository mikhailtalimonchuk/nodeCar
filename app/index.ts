import express from 'express';
import db from './lib/db';
import routers from './routers';
// @ts-ignore
import config from '../config';

const app = express();
const port = config.get('app:port');
db();

routers(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})