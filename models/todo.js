const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    taskName: { type: String, required: true },
    taskDescription: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('todo', todoSchema);
