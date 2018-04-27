import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const testSchema = new Schema({
    idKey: {type: Number, required: true },
    chapter: { type: Number, required: true },
    question: { type: String, required: true },
    answ1: { type: String, required: true },
    answ2: { type: String, required: true },
    answ3: { type: String, required: true },
    answ4: { type: String, required: true },
    rightAnsw: { type: String, required: true }
});

const Test = mongoose.model("Test", testSchema);