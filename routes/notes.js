const express = require("express");
const router = express.Router();

const Note = require("../models/note");

let arrayNotes;

router.get("/", async (req, res) => {
	try {
		arrayNotes = await Note.find({});
		console.log(arrayNotes);
	} catch (e) {
		console.log("Error: " + e);
	}
	res.render("index", {
        arrayNotes: arrayNotes
    });
});

module.exports = { router };
