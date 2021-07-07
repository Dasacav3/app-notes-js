require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connection to DB MongoDB Atlas
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.peqdu.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Base de datos conectada"))
	.catch((e) => console.error(e));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Rutas web
app.use("/", require("./routes/notes").router);

app.use((req, res, next) => {
	res.status(404).render("404");
});

app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`);
});
