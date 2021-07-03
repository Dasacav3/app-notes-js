const path = require("path");

module.exports = {
	entry: {
        index: "./src/index.js",
        img: {
            import: "./src/img/1.jpg",
        }
    },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	resolve: {
		extensions: [".js",".css",".png",".jpg"],
	},
};
