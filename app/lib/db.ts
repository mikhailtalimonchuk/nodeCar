import mongoose from 'mongoose';

export default () => {
    mongoose.connect('mongodb://mongo:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected to DB!");
    });
};