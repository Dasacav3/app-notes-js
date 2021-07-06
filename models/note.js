const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: String,
    topic: String,
    description: String
})

// Creating model

const Note = mongoose.model('Note', noteSchema, "notes");

module.exports = Note;

