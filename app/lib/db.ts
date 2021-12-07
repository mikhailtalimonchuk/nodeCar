import mongoose from 'mongoose';
// @ts-ignore
import config from '../../config';
const host = config.get('db:host');
const port = config.get('db:port');
const database = config.get('db:database');
export default () => {
    mongoose.connect(`mongodb://${host}:${port}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected to DB!");
    });
};