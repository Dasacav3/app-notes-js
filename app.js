const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

// Connection to DB MongoDB Atlas
const user = "user_root_01";
const password = "RPIDHMsafNsPUJsf";
const dbname = "app_notes";
const uri = `mongodb+srv://${user}:${password}@cluster0.peqdu.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
	useNewUrlParser: true, 
	useUnifiedTopology: true
})
	.then( () => console.log("Base de datos conectada"))
	.catch(e => console.error(e))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

// Rutas web
app.use('/', require("./routes/notes").router);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
