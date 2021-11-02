
// TODO: replace all require statements with import
import express from 'express';
const db = require('./lib/db');
const routers = require('./routers');
const app = express();
const port = 3000;

db();
app.use(express.json());

routers(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})