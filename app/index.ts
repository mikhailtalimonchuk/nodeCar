import express from 'express';
import db from './lib/db';
import routers from './routers';

const app = express();
const port = 3000;

db();

routers(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})