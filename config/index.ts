import path from 'path';
import nconf from 'nconf';
import * as configfle from './config.json';

nconf.argv()
    .env({separator: '__',}) //separator to allow object:value from env
    .file( {file: path.resolve(__dirname, 'config.json')});

export default nconf