import mongoose from 'mongoose';
import '../models/test';
import config from '/../../etc/config.json'
const Test = mongoose.model('Test');

export function setUpConnection(){
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

}

export function getTests(){
    return Test.find();
}
