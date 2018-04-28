'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
    testId: {type: Number, required: true },
    chapter: { type: Number, required: true },
    question: { type: String, required: true },
    answ1: { type: String, required: true },
    answ2: { type: String, required: true },
    answ3: { type: String, required: true },
    answ4: { type: String, required: true },
    rightAnsw: { type: String, required: true }
});

module.exports = mongoose.model('Test', TestSchema);
