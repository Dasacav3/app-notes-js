const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
const srcPath = path.resolve(__dirname, "src");

app.use(express.static(publicPath));
app.use(express.static(srcPath));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
