const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    description: String,
    status: String,
    remind: String,
    color: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);