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
		arrayNotes: arrayNotes,
	});
});

router.post("/", async (req, res) => {
	const body = req.body;
	try {
		const NoteDB = new Note(body);
		await NoteDB.save();

		//await Note.create(body);

		res.redirect("/");
	} catch (e) {
		console.log(e);
	}
});

router.get("/note/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const NoteDB = await Note.findOne({ _id: id });
		console.log(NoteDB);

		res.render("detail", {
			note: NoteDB,
			error: false,
		});
	} catch (error) {
		console.log(error);
		res.render("detail", {
			error: true,
			message: "No se encuentra el id seleccionado",
		});
	}
});

router.delete("/note/delete/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const NoteDB = await Note.findByIdAndDelete({ _id: id });
		console.log(NoteDB);

		if (NoteDB) {
			res.json({
				status: true,
				message: "Eliminado",
			});
		} else {
			res.json({
				status: false,
				message: "Fallo eliminar",
			});
		}
	} catch (error) {
		console.log(error);
	}
});

router.put("/note/edit/:id", async (req, res) => {
	const id = req.params.id;
	const body = req.body;

	try {
		const NoteDB = await Note.findByIdAndUpdate(id, body, { useFindAndModify: false });
		console.log(NoteDB);
		res.json({
			status: true,
			message: "Editado",
		});
	} catch (e) {
		console.log(e);
		res.json({
			status: false,
			message: "Fallo la edición",
		});
	}
});

module.exports = { router };
